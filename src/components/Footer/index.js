import React from "react";
import { LogoReact } from "../../assets/icon";
import {
  Behance,
  Dribbble,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "../../assets/img";
import "./index.css";

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div>
        <h3>Hey there 👋</h3>
        <p>
          Feel free to contact me if you want to collaborate or just be
          friendly. ☕
        </p>
        <p className="email">fadilfahrudin32@gmail.com</p>
      </div>
      <div className="socialMedia">
        <a href="/#">
          <img src={Dribbble} alt="icon" className="logo" />
        </a>
        <a href="/#">
          <img src={Behance} alt="icon" className="logo" />
        </a>
        <a href="/#">
          <img src={Github} alt="icon" className="logo" />
        </a>
        <a href="/#">
          <img src={Instagram} alt="icon" className="logo" />
        </a>
        <a href="/#">
          <img src={Linkedin} alt="icon" className="logo" />
        </a>
        <a href="/#">
          <img src={Youtube} alt="icon" className="logo" />
        </a>
      </div>

      <div className="copyright">
        <p> &#169; 2022 Created By Fadil Fahrudin</p>
      </div>
    </div>
  );
};

export default Footer;
