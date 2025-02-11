// class component
// functional component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "React Redux",
    address: "Hanoi",
    age: 20,
  };

  handleClick(event) {
    console.log("Button is clicked");
    console.log("My name is", this.state.name);
  }
  handleOnMouseOver(event) {
    console.log("Mouse is over");
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old. I am
        living in {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
