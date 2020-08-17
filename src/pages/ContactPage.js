import React from "react";
import NavBar from "../components/NavBar";

import "./ContactPage.style.scss";
import email from "../assets/email.gif";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className='contact-page'>
        <ul>
          <img alt='email-logo' src={email} />
          <a
            href='mailto:nhatlinhlun@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h1>nhatlinhlun@gmail.com</h1>
          </a>

          <a
            className='link'
            href='https://github.com/nuggetnchill'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className='hover-reveal'>Github</h2>
          </a>

          <a
            className='link'
            href='https://www.linkedin.com/in/nugg3t/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className='hover-reveal'>LinkedIn</h2>
          </a>

          <a
            className='link'
            href='https://twitter.com/nuggetnchill'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className='hover-reveal'>Twitter</h2>
          </a>
        </ul>
      </div>
    </>
  );
}
