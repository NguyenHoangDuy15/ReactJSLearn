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
    console.log("Random", Math.floor(Math.random() * 100 + 1));
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
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
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
