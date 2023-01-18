import React from "react";
import { Location, Timer, Worker } from "../../assets/img";
import Gap from "../Gap";
import "./index.css";

const CardExperience = ({ duration, location, jobdesk }) => {
  return (
    <div className="wrapper-card-experience">
      <div className="item-experience-card">
        <img src={Worker} alt="Worker" width="30" />
        <Gap width={10} />
        <h5>{jobdesk}</h5>
      </div>
      <Gap height={5} />
      <div className="item-experience-card">
        <img src={Location} alt="Worker" width="30" />
        <Gap width={10} />
        <p>{location}</p>
      </div>
      <Gap height={5} />
      <div className="item-experience-card">
        <img src={Timer} alt="Worker" width="30" />
        <Gap width={10} />
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default CardExperience;
