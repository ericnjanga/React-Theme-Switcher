import React, { Component } from 'react';
import ThemeSelector from './components/ThemeSelector/ThemeSelector.js';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Article from './components/Article/Article.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeSelector />
        <Navbar />
        <main role="main">
          <Hero />
          <div className="container">
            <div className="row">
              <Article />
              <Article />
              <Article />
            </div>
            <hr />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
