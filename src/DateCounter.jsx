import { act, useReducer, useState } from "react";

function DateCounter() {
  // const [count, setCount] = useState(0);

  function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "set":
        return { ...state, count: action.payload };
      case "incStep":
        return { ...state, step: action.payload };
      case "reset":
        return { count: 0, step: 1 };
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("april 8 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: "dec", payload: 1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    dispatch({ type: "set", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "incStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
