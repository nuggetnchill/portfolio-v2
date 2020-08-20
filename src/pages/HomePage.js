import React from "react";

import "./HomePage.style.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className='home-page'>
        <h1>Hi, I'm Justin</h1>
        <h2>
          I'm a recent graduate from Wichita State University and I'm looking
          for my first developer role. I love creating and experimenting new
          things with code. My specialties include fast learning, problem
          solving and stepping out of my comfort zone. If you like what you see,
          don't be shy to{" "}
          <a
            href='mailto:nhatlinhlun@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            say hello
          </a>{" "}
          and connect with me on{" "}
          <a
            href='https://www.linkedin.com/in/nugg3t/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <br />
          <br />
          Currently coding with: react | javascript | html | css & sass
        </h2>
      </div>
      <Footer />
    </>
  );
}
