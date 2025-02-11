import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import React from "react";
import MyComponent from "./components/MyComponent";

class App extends React.Component {
  state = {
    name: "React Redux",
    address: "Hanoi",
    age: 20,
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old. I am living in {this.state.address}
      </div>
    );
  }
}

// --> tu function component thanh class component

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World from React Redux
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
