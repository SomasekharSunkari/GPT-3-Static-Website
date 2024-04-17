import React from "react";
import {
  Footer,
  Blog,
  Possibilties,
  Features,
  Header,
  Whatgpt,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibilties />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
