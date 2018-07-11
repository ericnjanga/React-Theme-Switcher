import React from 'react';
import ThemeContext from './../../settings.js';

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