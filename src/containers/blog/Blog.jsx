import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import { Article } from "../../components";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient_text">A lot is Happening we are blogging it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article
            imageUrl={blog01}
            date="May 13,2004 "
            title="Gpt3 and OpenAI is the future.Let us explore how it is ? "
          />
        </div>

        <div className="gpt3__blog-container-groupB">
          <Article
            imageUrl={blog02}
            date="May 13,2004 "
            title="Gpt3 and OpenAI is the future.Let us explore how it is ? "
          />
          <Article
            imageUrl={blog03}
            date="May 13,2004 "
            title="Gpt3 and OpenAI is the future.Let us explore how it is ? "
          />
          <Article
            imageUrl={blog04}
            date="May 13,2004 "
            title="Gpt3 and OpenAI is the future.Let us explore how it is ? "
          />
          <Article
            imageUrl={blog05}
            date="May 13,2004 "
            title="Gpt3 and OpenAI is the future.Let us explore how it is ? "
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
