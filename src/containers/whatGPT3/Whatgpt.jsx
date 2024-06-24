import React from "react";

import "./whatgpt.css";
import Feature from "../../components/feature/Feature";
const Whatgpt = () => {
  // const data = new FormData();
  // data.append("name", "sekhar");
  // data.append("Purpose ", "For the Higer Education in UK");
  // data.append("Job Role", "SDE-2 in Google in california ");

  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What us GPT-3"
          text="Artificial Intelligence, often abbreviated as AI, encompasses various technologies such as machine.Artificial Intelligence, often abbreviated as AI, encompasses various technologies such as machineArtificial Intelligence, often abbreviated as AI, encompasses various technologies such as machine"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient_text">
          The possibilties are beyond your imaginations
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Artificial Intelligence, often abbreviated as AI, encompasses various technologies such as machine"
        />
        <Feature
          title="Knowledgebase"
          text="Artificial Intelligence, often abbreviated as AI, encompasses various technologies such as machine"
        />
        <Feature
          title="Education"
          text="Artificial Intelligence, often abbreviated as AI, encompasses various technologies such as machine"
        />
      </div>
    </div>
  );
};

export default Whatgpt;
