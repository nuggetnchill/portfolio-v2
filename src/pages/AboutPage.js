import React from "react";

import "./AboutPage.style.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import headshot from "../assets/headshot.jpg";
import sky from "../assets/sky.jpg";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className='about-page'>
        <div className='img-grid'>
          <img alt='me' src={headshot} className='me' />
          <img alt='sky' src={sky} className='sky' />
        </div>
        <div className='about-grid'>
          <h1>About me</h1>
          <h2>
            I have achieved a strong understanding in Marketing from school. I
            enjoy doing things that are creative and challenging whether via
            coding, editing photos & videos or aquascaping.
          </h2>
          <h3>
            <span role='img' aria-label='robot'>
              🤖
            </span>
          </h3>
          <ul>
            <li>HTML</li>
            <li>CSS | SASS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Mobile and Responsive Design</li>
          </ul>
          <h3>
            <span role='img' aria-label='art'>
              🎨
            </span>
          </h3>
          <ul>
            <li>Photoshop</li>
            <li>Figma</li>
            <li>Lightroom</li>
            <li>OBS Studio</li>
          </ul>
          <h3>
            <span role='img' aria-label='palm tree'>
              🌴
            </span>
          </h3>
          <ul>
            <li>I enjoy collaborating and learning from others </li>
            <li>I love learning new things, just not sitting in class</li>
            <li>I push myself to try new things and to be uncomfortable</li>
          </ul>
          <p>
            My apartment has been getting smaller every year from having new
            roommates: hamster, chinchilla, sugar gliders and fishies. When I'm
            not coding, I go to the gym, stream on Twitch, or watch Youtube
            videos about breeding{" "}
            <span role='img' aria-label='shrimp'>
              🦐
            </span>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
