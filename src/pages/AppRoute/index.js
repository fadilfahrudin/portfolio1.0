import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Footer, Header } from "../../components";
import { About, Article, Main, Project } from "../../pages";
import "./index.css";

const AppRoute = () => {
  return (
    <div>
      <Header />
      <div className="wrapper-main">
        <Switch>
          <Route path="/my-portfolio" element={<Main />} />
          <Route path="/my-portfolio/about" element={<About />} />
          <Route path="/my-portfolio/project" element={<Project />} />
          <Route path="/my-portfolio/articles" element={<Article />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default AppRoute;
