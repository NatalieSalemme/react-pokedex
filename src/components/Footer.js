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
      <a
        href="https://github.com/NatalieSalemme/react-pokedex"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="logo"
          src={require('../images/github.png')}
          alt="Github logo"
          href="https://github.com/NatalieSalemme/react-pokedex"
        />
      </a>
  </div>
);
export default Footer;
