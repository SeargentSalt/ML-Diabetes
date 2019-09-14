import React, { Component } from 'react';
import Header from './components/Header';
import UploadImage from './components/UploadImage'
import './App.css';
import 'react-bootstrap';
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
