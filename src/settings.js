import React from 'react';

/**
 * App Settings
 * - themeStyle
 * - ThemeContext
 */

export const themeStyle = {
  light: { 
    name: 'Obi-Wan Kenobi',
    mainContainer: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      overflowY: 'scroll',
      backgroundColor: '#fff',
    },
    navbar: {
      theme: 'dark',
    },
    btnThemeSwitch: {
      className: 'btn-dark',
    },
    hero: {
      backgroundColor: '#e9ecef',
      buttonClass: 'btn-primary',
    },
    article: {
      text: {
        color: 'rgb(33, 37, 41)',
      },
      buttonClass: 'btn-secondary',
    },
    footer: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(0, 0, 0, 0.3)',
    },
  },
  dark: {
    name: 'Darth Vader',
    mainContainer: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      overflowY: 'scroll',
      backgroundColor: '#333',
    },
    navbar: {
      theme: 'light',
    },
    btnThemeSwitch: {
      className: 'btn-light',
    },
    hero: {
      backgroundColor: '#5b5c5d',
      buttonClass: 'btn-warning',
    },
    article: {
      text: {
        color: '#ccc',
      },
      buttonClass: 'btn-light',
    },
    footer: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    },
  },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const ThemeContext = React.createContext(themeStyle.dark);

export default ThemeContext;
