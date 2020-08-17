import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.style.scss';
import Footer from '../components/Footer';

export default function ErrorPage() {
  return (
    <>
      <div className='error'>
        <h1 className='message-title'>Page Not Found</h1>
        <p className='message-text'>
          We're sorry, the page you were looking for isn't found here. The link
          you followed may either be broken or no longer exists.
        </p>
        <Link to='/' className='go-back'>
          <img
            alt
            src='https://media1.tenor.com/images/9b5c045e49594779c2819ca7a20ac845/tenor.gif?itemid=12437526'
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}
