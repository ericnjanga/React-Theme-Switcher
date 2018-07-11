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
