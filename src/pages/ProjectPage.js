import React from "react";
import Particles from "react-particles-js";
import Tilt from "react-tilt";

import "./ProjectPage.style.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ProjectPage() {
  const particleParams = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
  };

  const projectList = [
    {
      name: "NASA App",
      imgUrl: "https://media0.giphy.com/media/VItvKVVnHTdM9O7QJ5/giphy.gif",
      stack: "[React]",
      description:
        "Using data from official NASA API, this app can show you Astronomy Picture of the Day and pictures from Mars Rover",
      link: "https://space-explore.netlify.app/",
      sourceCode: "https://github.com/nuggetnchill/nasa-app",
    },
    {
      name: "Facial Detection App",
      imgUrl:
        "https://camo.githubusercontent.com/f6fe28de17c36342784cac1a8324985dd6b12f6c/68747470733a2f2f6d65646961332e67697068792e636f6d2f6d656469612f6c6c79386e47565967595053545a774e4d782f67697068792e676966",
      stack: "[React, Node, Express, Heroku Postgres]",
      description:
        "My first Full Stack application that can detect faces from images by utilizing Clarifai Face Detection API",
      link: "https://face-regconition-app.herokuapp.com/",
      sourceCode: "https://github.com/nuggetnchill/facial-recognition-app",
    },
    {
      name: "What frog are you?",
      imgUrl:
        "https://camo.githubusercontent.com/abc9eb5ec18651a7dd2e29ca00ec537830cfeb2d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c3071466b426862367079484c37326e314d2f67697068792e676966",
      stack: "[React]",
      description:
        "A React app with a functionality of filtering out the right frog that fits your name",
      link: "https://nuggetnchill.github.io/frog/",
      sourceCode: "https://github.com/nuggetnchill/frog",
    },
    {
      name: "Instagram Clone",
      imgUrl: "https://media3.giphy.com/media/ZcQSLxmHaRd4AeYdzJ/giphy.gif",
      stack: "[React, Firebase]",
      description:
        "An app that uploads images, store them in Firebase Storage, then capture the url reference from Database and uses that reference to showcase images on the Front-end.",
      link: "https://github.com/nuggetnchill/nugget-gram",
      sourceCode: "https://github.com/nuggetnchill/nugget-gram",
    },
    {
      name: "Leica M6",
      imgUrl: "https://media.giphy.com/media/iIH5paU1zDSbUblPJn/giphy.gif",
      stack: "[HTML, SASS]",
      description:
        "A responsive landing page to feature the Leica M6 Camera. Web page renders well in all devices by adapting to the screen size and automatically adjust the layout and contents of the site.",
      link: "https://m6.netlify.app/",
      sourceCode: "https://github.com/nuggetnchill/leica-landingpage",
    },
    {
      name: "Responsive Portfolio",
      imgUrl: "https://media.giphy.com/media/SqBLLV2mvM5bodulW8/giphy.gif",
      stack: "[HTML, CSS]",
      description:
        "An animated and color changing portfolio landing page. Page is responsive and automatically adjusts content and layout base on the viewing device. Buttons that change background color by listening to click event.",
      link: "https://nuggetnchill.github.io/portfolio/",
      sourceCode: "https://github.com/nuggetnchill/portfolio",
    },
    {
      name: "Is it raining?",
      imgUrl: "https://media.giphy.com/media/kBZk9tvCKZruNUnv2O/giphy.gif",
      stack: "[HTML, CSS, JavaScript]",
      description:
        "JavaScript app that allows user to look up current local weather information by utilizing OpenWeatherMap API.",
      link: "https://raincheck.netlify.app/",
      sourceCode: "https://github.com/nuggetnchill/weather-app-js",
    },
  ];

  return (
    <>
      <NavBar />

      <header>
        <Particles className='particles' params={particleParams} />
        <h1>My Projects</h1>
      </header>

      <div className='project-page'>
        <div className='project-wrap'>
          {projectList.map((project, id) => {
            return (
              <div className='project' key={id}>
                <Tilt options={{ scale: 1 }}>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img alt={id} src={project.imgUrl} />
                  </a>
                </Tilt>
                <h1>{project.name}</h1>
                <h3>{project.stack}</h3>
                <p>{project.description}</p>
                <a
                  href={project.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Source Code
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
