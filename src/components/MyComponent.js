// class component
// functional component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "Hoang Duy",
//         age: 16,
//       },
//       {
//         id: 2,
//         name: "Hoang Duy 2",
//         age: 21,
//       },
//       {
//         id: 3,
//         name: "Hoang Duy 3",
//         age: 80,
//       },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log(userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let newListUsers = this.state.listUsers;
//     newListUsers = newListUsers.filter((user) => user.id !== userId);
//     this.setState({
//       listUsers: newListUsers,
//     });
//   }

//   // JSX
//   render() {
//     // DRY: Don't Repeat Yourself
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             // users={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

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
    }

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
