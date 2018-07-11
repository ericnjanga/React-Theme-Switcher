import React from 'react';
import ThemeContext , { themeStyle } from './../../settings.js';

/**
 * - Article
 * - Use theme context to apply current theme style on:
 * -- text color
 * -- Button color class
 */
const Article = () => {

  return (
    <ThemeContext.Consumer>
      {
        theme => ( 
          <div className="col-md-4">
            <h2 style={theme.article.text}>Heading</h2>
            <p style={theme.article.text}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p style={theme.article.text}><a className={`btn ${theme.article.buttonClass}`} href="#" role="button">View details »</a></p>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );

  /**
   * 
                  
   */

};

export default Article;