import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.style.scss";

export default function ErrorPage() {
  return (
    <>
      <div className='error'>
        <h1 className='message-title'>Page Not Found</h1>
        <p className='message-text'>
          Sorry, the page you are looking for is not here. The link you followed
          may either be broken or no longer exists.
        </p>
        <Link to='/' className='go-back'>
          <img
            alt='take-me-home'
            src='https://media1.tenor.com/images/9b5c045e49594779c2819ca7a20ac845/tenor.gif?itemid=12437526'
          />
        </Link>
      </div>
    </>
  );
}
