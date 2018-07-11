Example usage of `dynamic context` in an React application. 


## The Concept
Users have the possibility to switch the application's theme (light or dark). The layout is based on [Twitter's Bootstrap Jumbotron template](http://getbootstrap.com/docs/4.1/examples/jumbotron/#).

## How it works
- Two objects describing "light" and "dark" styling are saved in a "settings" file which exports a "ThemeContext" object initialized with one of the objects `const ThemeContext = React.createContext(themeStyle.dark)`. 
- `ThemeContext` is "provided" to the entire application by wrapping the root component with a `ThemeContext Provider`, `<ThemeContext.Provider value={this.state.theme}>...</ThemeContext.Provider>` initialize it with a default theme (saved in the state)
- `ThemeContext` is "consumed" by all components of the application `(<ThemeContext.Consumer> ... </<ThemeContext.Consumer>)`


### Developer
[Eric Njanga](http://ericnjanga.com) ([LinkedIn](https://www.linkedin.com/in/ericanjanga/) | [Medium](https://medium.com/@eric.njanga))