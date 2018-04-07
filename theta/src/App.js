import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <RaisedButton label="Primary" primary={true} style={style} />
    </MuiThemeProvider>
    );
  }
}

export default App;
