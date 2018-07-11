import React from 'react';
import ThemeContext from './../../settings.js';

/**
 * - AppContainer
 * - Use theme context to apply current theme style on:
 * -- background color
 */
const AppContainer = (props) => {

  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <div style={theme.mainContainer}>
            {props.children}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );

};

export default AppContainer;