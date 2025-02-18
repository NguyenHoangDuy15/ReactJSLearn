import React from "react";
import "./DisplayInfo.scss";
import logo from '../logo.svg'

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {document.title = 'HoangDuy'}, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", this.props, prevProps);
    if (this.props.listUsers.length !== prevProps.listUsers.length) {
      if (this.props.listUsers.length === 5) {
        alert("Is Full");
      }
    }
  }
  
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log("render");
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-infor-container">
        {/* <img src={logo}/>  */}
        <div onClick={() => this.handleShowHide()}>
          {this.state.isShowListUser === true ? "Hide" : "Show"} List User
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={index} className={+user.age > 18 ? "green" : "red"}>
                  <div><div>My name is {user.name}</div>
                  <div>May age is {user.age}</div></div>
                  <div>
                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                  </div>
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
