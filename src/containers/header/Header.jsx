import React from "react";
import "./header.css";
import people from "../../assetsgpt/people.png";
import ai from "../../assetsgpt/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient_text">
          Let's Build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
          doloremque expedita ratione eligendi laudantium ut dolorem aut. Animi
          quis accusantium reprehenderit exercitationem facere tempora corporis
          aperiam dolorem assumenda sunt!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email" />
          <button type="button">Get Started </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,000 people requested accept request</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
