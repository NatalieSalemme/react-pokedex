import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => (
  <div>
    <p className="footer">Coded by Natalie Salemme</p>
    <img
      className="logo"
      src={logo}
      alt="React logo" />
    <img
      className="logo"
      src={require('../images/sass.png')}
      alt="Sass logo" />
  </div>
);
export default Footer;
