import React from "react";

import "./Footer.style.scss";

import Clock from "../components/Clock";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>© Justin Nguyen 2020</p>
        <ul>
          <a
            className='link'
            href='https://github.com/nuggetnchill'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
          <a
            className='link'
            href='https://www.linkedin.com/in/nugg3t/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a
            className='link'
            href='https://twitter.com/nuggetnchill'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </ul>
      </div>
      <Clock />
    </>
  );
};

export default Footer;
