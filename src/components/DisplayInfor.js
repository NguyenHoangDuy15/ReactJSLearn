import React from "react";
import "./DisplayInfo.scss";
import logo from '../logo.svg'

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-infor-container">
        <img src={logo}/>
        <div onClick={() => this.handleShowHide()}>
          {this.state.isShowListUser === true ? "Hide" : "Show"} List User
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={index} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>May age is {user.age}</div>
                </div>
              );
            })}
            {/* <div>My name is {name}</div>
        <div>May age is {age}</div> */}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
