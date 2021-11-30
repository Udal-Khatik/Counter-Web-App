import React from "react";
import "./Counter.css";
const Counter = ({ count, setCount }) => {
  const MAX_VALUE = process.env.REACT_APP_MAX_VALUE;

  const decreament = () => {
    var tmp = count - 1;
    setCount(tmp);
  };
  const increament = () => {
    let tmp = count - 1;
    tmp = tmp + 2;
    tmp > MAX_VALUE ? setCount(MAX_VALUE) : setCount(tmp);
  };
  const handleInput = (e) => {
    let val = e.target.value;
    val = val - 1;
    val = val + 1;
    val > MAX_VALUE ? setCount(MAX_VALUE) : setCount(e.target.value);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button className="container leftButton" onClick={() => decreament()}>
          -
        </button>
        <input
          style={{
            width: "30px",
            padding: "22px 17px 25px 17px",
          }}
          className="container inputEl"
          value={count}
          onChange={(e) => handleInput(e)}
          onBlur={() => setCount(count)}
        />
        <button className="container rightButton" onClick={() => increament()}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
