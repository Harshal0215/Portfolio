import React from "react";
import "./footer.css";
import flogo from "../../assets/theme_pattern.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uicon from "../../assets/user_icon.svg";
import github from "../../assets/github.svg";
import insta from "../../assets/instagram-1.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <div className="ftop">
        <div className="fleft">
          <h1 className="lkj">HARSHAL🤖 </h1>
          {/*      */}
          <p>
            I am Harshal from Nagpur, an aspiring web developer and a tech nerd,
            Eager to contribute my skills and learn from experienced
            professionals.
          </p>
        </div>
        <div className="fright">
          <div className="femail">
            <img src={uicon} alt="" />
            <input placeholder="Enter email" type="email" name="" id="" />
          </div>
          <div className="fsubscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="fbottom">
        <p className="fbleft">© 2024 Copyrights HVM</p>
        <div className="fbright">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Connect </p>
        </div>
      </div>
      <div className="down">
        <div></div>

        <ul className="sm">
          <li>
            <img src={github} alt="" />{" "}
            <a target="_blank" href="https://github.com/Harshal0215">
              Github
            </a>
          </li>
          <li>
            <img src={linkedin} alt="" />{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/harshal-masram-1875a31a3"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <img src={insta} alt="https://www.instagram.com/harshal_masram_" />{" "}
            <a target="_blank" href="">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
