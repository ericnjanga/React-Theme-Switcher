import React from 'react';

const style = {
  padding: '30px',
  textAlign: 'center',
}

const ThemeSelector = () => {

  return (
    <section style={style}>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked /> Light Theme
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" /> Dark Theme
        </label>
      </div>
    </section>
  );

};

export default ThemeSelector;
