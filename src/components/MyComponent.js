// class component
// functional component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "Hoang Duy",
        age: 20,
      },
      {
        id: 2,
        name: "Hoang Duy 2",
        age: 21,
      },
      {
        id: 3,
        name: "Hoang Duy 3",
        age: 22,
      },
    ],
  };

  // JSX
  render() {
    // DRY: Don't Repeat Yourself
    return (
      <div>
        <UserInfor></UserInfor>
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
      </div>
    );
  }
}

export default MyComponent;
