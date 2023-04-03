import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./index.css";
import useScrollListLiner from "../../utils/Hooks/useScrollListener";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const [navList, setNavList] = useState([]);
	const scroll = useScrollListLiner();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const _classList = [];

		if (scroll.y > 50 && scroll.y - scroll.lastY > 0) {
			_classList.push("nav-bar--hidden2");
		}
		setNavList(_classList);
	}, [scroll.y, scroll.lastY]);

	const menus = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "About",
			link: "/about",
		},
		{
			title: "Project",
			link: "/projects",
		},
	];

	const naviagte = useNavigate();
	const currenturl = window.location.pathname;

	const clicked = (menu) => {
		setProgress(progress + 100);
		return naviagte(menu.link);
	};

	return (
		<>
			<LoadingBar
				color='#f2a365'
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>

			<nav className={`${navList.join(" ")}`}>
				<div className='nav-brand'>
					<div className='logoHeader'>F</div>
				</div>
				<div className='nav'>
					<ul>
						{menus.map((menu, index) => {
							return (
								<li
									onClick={() => clicked(menu, index)}
									key={index}
									className={menu.link === currenturl ? "active" : "menuNav"}>
									{menu.title}
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
