import React from "react";
import "./index.css";
const Card = ({
	bgCard,
	titleCard,
	descriptionCard,
	imgCard,
	toolCard,
	width,
}) => {
	return (
		<div
			className='wrapper-card'
			style={{
				backgroundColor: bgCard,
			}}>
			<div className='px-4 pt-4'>
				<h1>{titleCard}</h1>
				<h4>{descriptionCard}</h4>
			</div>

			<img src={imgCard} alt='Project' className='main-img-card' />
		</div>
	);
};

export default Card;
