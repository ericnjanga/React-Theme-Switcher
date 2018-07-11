import React from 'react';
import ThemeContext from './../../settings.js';

const style = {
  padding: '30px',
  textAlign: 'center',
  btn: {
    width: '300px',
    height: '50px',
  },
}

/**
 * - Preview next theme to use
 * - Pass parent click handle function down to button
 * - Use theme context to apply current theme style on:
 * -- Button color class
 */
const ThemeSwitcher = (props) => {

  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <section style={style}>
            <button style={style.btn} className={`btn ${theme.btnThemeSwitch.className}`} onClick={props.onClick}>
              Switch to <b>{props.oppositeTheme.name}</b> Theme
            </button>
          </section>
        )
      }
    </ThemeContext.Consumer>
  );

};

export default ThemeSwitcher;
