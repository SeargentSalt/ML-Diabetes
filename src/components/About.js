import React from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
export default function About () {
  return (

 <Jumbotron>
   <h1>Hello, world!</h1>
   <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
   </p>
   <p>
    <Button variant="primary">Learn more</Button>
   </p>
 </Jumbotron>
  )
}

const headerStyle = {
    background: '#8053c9',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
