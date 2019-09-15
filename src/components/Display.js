import React from 'react';





class Display extends React.Component {


  Greeting() {
    /*var num2 = this.props.dataFromParent;*/
    var num2 = 0
    if (num2 == 1) {
      return "sign up";
      document.getElementById("myP1").style.display = "none";
    }
    return "sign in";
    document.getElementById("myP2").style.display = "none";
  }

  render() {

    return (
      <div>
      <p id="myP1">HAs</p>
      <p id="myP2">DOESNOT HAs</p>
      </div>
    )

  }
}
export default Display;
