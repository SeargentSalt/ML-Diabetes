import React, { Component } from 'react';
import Header from './components/Header';
import UploadImage from './components/UploadImage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Display from './components/Display';

class App extends Component {
state = { message:""}
callbackFunction = (childData) => {

	this.setState({message: childData});

};
  render() {
    return (
      <div>
	<NavigationBar />
        <Header />
        <About />
				<Display dataFromParent = {this.state.message} />
        <UploadImage parentCallback = {this.callbackFunction} /> 
      </div>
    );
  }
}

export default App;
