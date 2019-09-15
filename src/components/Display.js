import React from 'react';





class Display extends React.Component {

  Greeting() {
    //var num2 = this.props.dataFromParent;
    var num2 = 1
    
    if (num2 == 1) {
      document.getElementById("myP1").style.display = "none";
    }
    else {
      document.getElementById("myP2").style.display = "none";
      console.log("works");
    }
    
    //this.forceUpdate();
  }

  render() {

    return (
      <div>
        {this.props.dataFromParent == 1 ? 
        <p id="myP1" >HAs </p> : 
        <p id="myP2">DOESNOT HAs</p>}
      </div>
    )

  }
}
export default Display;
