import React from 'react';
import ThemeContext from './../../settings.js';

/**
 * - Footer
 * - Use theme context to apply current theme style on:
 * -- container border color
 * -- text color
 */
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
