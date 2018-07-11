import React, { Component } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.js';
import AppContainer from './components/AppContainer/AppContainer.js';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Article from './components/Article/Article.js';
import Footer from './components/Footer/Footer.js';
import ThemeContext , { themeStyle } from './settings.js';


class App extends Component {

  constructor(props) {
    super(props);

    // Setup default theme (styling the whole app) and opposite theme (preview alternate theme to uers)
    this.state = {
      theme: themeStyle.light,
      oppositeTheme : themeStyle.dark,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  /**
   * Toggle theme and opposite theme objects
   */
  toggleTheme() {
    this.setState(state => ({
      theme: (state.theme === themeStyle.dark) ? themeStyle.light : themeStyle.dark,
      oppositeTheme : (state.oppositeTheme === themeStyle.dark) ? themeStyle.light : themeStyle.dark,
    }));
  };


  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <AppContainer>
          <ThemeSwitcher {...this.state} onClick={this.toggleTheme} />
          <div>
            <Navbar />

            <main role="main">
              <Hero />
              <div className="container">
                <div className="row">
                  <Article />
                  <Article />
                  <Article />
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </AppContainer>
      </ThemeContext.Provider>
    );
  }
}

export default App;
