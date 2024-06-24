import React from "react";

import posimage from "../../assetsgpt/possibility.png";
import "./possibilts.css";
const Possibilits = () => {
  return (
    <div className="gpt3__possibilty section__padding" id="possibilty">
      <div className="gpt3__possibilty-image">
        <img src={posimage} alt="Posssibilty Image" />
      </div>
      <div className="gpt3__possinilty-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibilits;
