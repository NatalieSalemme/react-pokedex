import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => (
  <div className="footer">
    <div>
      <p className="footer-text">Coded by Natalie Salemme</p>
    </div>
    <div className="footer-logos">
      <div>
      <img
        className="logo"
        src={logo}
        alt="React logo" />
        </div>
        <div>
      <img
        className="logo"
        src={require('../images/sass.png')}
        alt="Sass logo" />
        </div>
        <div>
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
      </div>
  </div>
);
export default Footer;
