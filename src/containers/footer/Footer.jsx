import React from "react";
import "./footer.css";
import gpt3Logo from "../../assetsgpt/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding " style={{ color: "white" }}>
      <div className="gpt3__footer-heading">
        <h1 className="gradient_text">
          Do you want to step into future before othres
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access </p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord k12 182 DK Alkknjcd and All requests from </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Overons</p>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Overons</p>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@ 2024 GPT-3 , All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
