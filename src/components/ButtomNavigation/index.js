import React, { useEffect, useState } from "react";
import useScrollListner from "../../utils/Hooks/useScrollListener";
import { BiAtom, BiBot, BiHomeSmile } from "react-icons/bi";
import "./buttomNav.css";
import { useNavigate } from "react-router-dom";

const ButtomNavigation = () => {
	const [navList, setNavList] = useState([]);
	const scroll = useScrollListner();

	useEffect(() => {
		const _classList = [];

		if (scroll.y > 50 && scroll.y - scroll.lastY > 0)
			_classList.push("nav-bar--hidden");

		setNavList(_classList);
	}, [scroll.y, scroll.lastY]);

	const menus = [
		{
			title: "Project",
			icon: <BiAtom />,
			link: "/project",
		},
		{
			title: "Home",
			icon: <BiHomeSmile />,
			link: "/",
		},
		{
			title: "About",
			icon: <BiBot />,
			link: "/about",
		},
	];

	const navigate = useNavigate();

	const currentUrl = window.location.pathname;

	const clicked = (button) => {
		return navigate(button.link);
	};

	return (
		<>
			<div className={`${"bmNavigation"} ${navList.join(" ")} `}>
				<ul>
					{menus.map((button, index) => {
						return (
							<li
								onClick={() => clicked(button, index)}
								key={index}
								className={button.link === currentUrl ? "activeBm" : ""}>
								<div className='icBM'>{button.icon}</div>
								<div className='titleBM'>{button.title}</div>
							</li>
						);
					})}
					<div className='menu-bg' />
				</ul>
			</div>
		</>
	);
};

export default ButtomNavigation;
