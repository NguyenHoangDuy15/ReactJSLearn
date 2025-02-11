// class component
// functional component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  
  // JSX
  render() {
    const myAge = 20;
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfor name="Hoang Duy" age="20"/>
        <DisplayInfor name="Hoang Duy" age={myAge}/>
      </div>
    );
  }
}

export default MyComponent;
