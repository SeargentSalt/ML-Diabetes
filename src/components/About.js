import React from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
export default function About () {
  return (

 <Jumbotron>
   <h1>What is Diabetic Retinopathy </h1>
   <p>Millions of people suffer from diabetic retinopathy, the leading cause of blindness among working aged adults. Aravind Eye Hospital in India hopes to detect and prevent this disease among people living in rural areas where medical screening is difficult to conduct.  </p>
   <p>
    <Button variant="primary">Learn more</Button>
   </p>
 </Jumbotron>
  )
}
