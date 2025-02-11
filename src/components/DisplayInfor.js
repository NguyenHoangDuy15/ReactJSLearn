import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        <div>My name is {name}</div>
        <div>May age is {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
