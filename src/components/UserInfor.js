import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "React Redux",
    address: "Hanoi",
    age: 20,
  };

  //  handleOnChangeInput
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old. I am
        living in {this.state.address}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <label>Age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
