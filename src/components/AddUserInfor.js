import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("Hanoi");

    //  handleOnChangeInput
    const handleOnChangeInput = (event) => {
      setName(event.target.value);
    };
    const handleOnChangeAge = (event) => {
      setAge(event.target.value);
    };
    const handleOnSubmit = (event) => {
      event.preventDefault();
      // console.log(this.state);
      props.handleAddNewUser({
        id: Math.floor(Math.random() * 100 + 1) + "-random",
        name: name,
        age: age,
      });
    };

  return (
    <div>
      My name is {name} and I am {age} years old. I am
      living in {address}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />

        <label>Age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
