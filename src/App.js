import React, { Component } from 'react';
import Header from './components/Header';
import UploadImage from './components/UploadImage'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <UploadImage />
      </div>
    );
  }
}

export default App;
