import React from "react";
import underCon from "../../assets/img/under-construction.png";
import "./project.css";

const Project = () => {
	return (
		<div className='project'>
			<img src={underCon} alt='UnderContruction' width={300} />
			<h1>Under Development</h1>
		</div>
	);
};

export default Project;
