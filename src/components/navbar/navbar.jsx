import React, { useState, useEffect } from 'react';
import './navbar.styles.scss';

const Navbar = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-react-152aa.appspot.com/o/logo.png?alt=media&token=6de80b0d-0a0a-46f6-ad6a-6de0a1fe0607"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-react-152aa.appspot.com/o/images.jpg?alt=media&token=5f4e8704-58e6-4888-bf7f-c2fff4512d05"
        alt="Netflix Avatar"
        className="nav__logo avatar"
      />
    </div>
  );
};

export default Navbar;
