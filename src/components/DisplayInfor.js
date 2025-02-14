import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={index}>
              <div>My name is {user.name}</div>
              <div>May age is {user.age}</div>
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>May age is {age}</div> */}
      </div>
    );
  }
}
export default DisplayInfor;
