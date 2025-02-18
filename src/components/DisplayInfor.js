import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// stateless vs stateful component

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHdeListUser, setShowHdeListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHdeListUser(!isShowHdeListUser);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHdeListUser ? "Hide" : "Show"} list user
        </span>
      </div>
      {isShowHdeListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={index} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>May age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          {/* <div>My name is {name}</div>
            <div>May age is {age}</div> */}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
