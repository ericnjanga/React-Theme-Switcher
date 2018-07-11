import React from 'react';
import ThemeContext from './../../settings.js';

const Hero = () => {
  
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <div className="jumbotron" style={theme.hero}>
            <div className="container">
              <h1 className="display-3" style={theme.article.text}>Hello, world!</h1>
              <p style={theme.article.text}>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a className={`btn ${theme.hero.buttonClass} btn-lg`} href="#" role="button">Learn more »</a></p>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );

};

export default Hero;