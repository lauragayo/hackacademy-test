import { useState } from "react";

const ChildComponent = ({ onTextChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onTextChange(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChildComponent;
