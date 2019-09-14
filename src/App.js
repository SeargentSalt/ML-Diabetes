import React, { Component } from 'react';
import Header from './components/Header';
import UploadImage from './components/UploadImage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap';
import About from './components/About'
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <About />
        <UploadImage />
      </div>
    );
  }
}

export default App;
