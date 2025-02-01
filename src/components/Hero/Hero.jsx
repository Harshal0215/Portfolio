import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../assets/profileimage.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div id="Hero" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Harshal Masram,</span> an aspiring frontend developer based in
        Nagpur{" "}
      </h1>
      <p>
        Currently focusing on learning new skills and building networks and
        relations...
      </p>
      <div className="hero-action">
        <div className="hero-connect anchor">
          <AnchorLink className="anchor" offset={50} href="#Contact">
            Contact me
          </AnchorLink>
        </div>
        <div className="resume">
          <a
            className=""
            href="../../assets/resume_harshal_fn.pdf"
            download="myResume.pdf"
          >
            Resume
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
