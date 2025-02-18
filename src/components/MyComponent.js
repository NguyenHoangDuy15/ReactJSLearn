// class component
// functional component

import React, { useEffect } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
  const [listUsers, setListUsers] = React.useState([
    {
      id: 1,
      name: "Hoang Duy",
      age: 16,
    },
    {
      id: 2,
      name: "Hoang Duy 2",
      age: 21,
    },
    {
      id: 3,
      name: "Hoang Duy 3",
      age: 80,
    },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let newListUsers = listUsers;
    newListUsers = newListUsers.filter((user) => user.id !== userId);
    setListUsers(newListUsers);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("noooooo");
    }
    console.log("useEffect");
  }, [listUsers]);
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          // users={this.state.listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
