import React from "react";
import "./work.css";
import themep from "../../assets/theme_pattern.svg";
import arrow from "../../assets/arrow_icon.svg";
import workdata from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="Work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themep} alt="" />
      </div>
      <div className="mywork-container">
        {workdata.map((work, i) => {
          return <img key={i} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="show-more">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
