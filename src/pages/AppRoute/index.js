import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { ButtomNavigation, Footer, Header } from "../../components";
import { About, Article, Main, Project } from "../../pages";
import ScrollToTop from "../../utils/scrollToTop";
import "./index.css";

const AppRoute = () => {
	return (
		<div className='mainApp-container'>
			<Header />
			<div className='wrapper-main'>
				<ScrollToTop />
				<Switch>
					<Route exact path='/' element={<Main />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Project />} />
					<Route path='/articles' element={<Article />} />
				</Switch>
			</div>
			<Footer />
			<ButtomNavigation />
		</div>
	);
};

export default AppRoute;
