import React, { Component } from 'react';
import './App.css';
import InputValidation from './components/InputValidation';


class App extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className="App">
        <InputValidation />
      </div>
    );
  }
}

export default App;
