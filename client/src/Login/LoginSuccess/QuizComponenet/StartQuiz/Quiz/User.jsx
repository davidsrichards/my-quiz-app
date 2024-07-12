import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../../../../../REDOX/Features/TodoSlice";

function User() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();
    dispatch(addItem(inputValue));
  };

  return (
    <>
      <>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
      </>
    </>
  );
}

export default User;
