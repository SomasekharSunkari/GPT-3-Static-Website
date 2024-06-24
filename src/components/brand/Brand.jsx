import React from "react";
import "./brand.css";
import { shopify, slack, dropbox, atlassian, google } from "./import";
const Brand = () => {
  return (
    <div className="gpt3__brand  section__padding">
      <img src={google} alt="Google" />
      <img src={slack} alt="slack" />
      <img src={shopify} alt="shopify" />
      <img src={dropbox} alt="dropbox" />
      <img src={atlassian} alt="atlassian" />
    </div>
  );
};

export default Brand;
