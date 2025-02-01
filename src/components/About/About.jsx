import React from "react";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/profileimage.jpg";
import "./about.css";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="left">
          <img src={profile} alt="" />
        </div>
        <div className="right">
          <div className="about-para">
            <p>
              Aspiring web developer with a passion for problem-solving and a
              strong foundation in development. Currently pursuing MCA from Shri
              Shivaji Science College Nagpur. Eager to contribute my skills and
              learn from experienced professionals.
            </p>
            <p>
              Learning developing and deploying scalable web applications,
              enhancing user experiencewith React.js . Skilled in HTML, CSS and
              Javascript and active listening.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <p>HTML $ CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="achievement">
          <h1>1+ </h1>
          <p>Years of Experience</p>
        </div>
        <div className="achievement">
          <h1>10+ </h1>
          <p>Projects</p>
        </div>
        <div className="achievement">
          <h1>And</h1>
          <p>Counting on</p>
        </div>
      </div>
    </div>
  );
};

export default About;
