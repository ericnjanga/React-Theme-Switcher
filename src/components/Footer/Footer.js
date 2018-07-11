import React from 'react';
import ThemeContext from './../../settings.js';

const Footer = () => {
  
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <footer className="container" style={theme.footer}>
            <p style={theme.article.text}>&copy; Company 2018</p>
          </footer>
        )
      }
    </ThemeContext.Consumer>
  );

};

export default Footer;
