import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "store/counter/counter.actions";

export const App = () => {
  const { counter } = useSelector((state: any) => state.counterStore);
  const dispatch = useDispatch();
  const increment = () => dispatch(INCREMENT());
  const decrement = () => dispatch(DECREMENT());

  return (
    <div style={{ textAlign: "center" }}>
      <button
        data-testid="counter-minus-button"
        style={{
          width: "30px",
          height: "30px",
          fontSize: "20px",
        }}
        onClick={decrement}
      >
        -
      </button>
      <button
        data-testid="counter-plus-button"
        style={{
          width: "30px",
          height: "30px",
          fontSize: "20px",
        }}
        onClick={increment}
      >
        +
      </button>
      <p data-testid="counter-result">{counter}</p>
    </div>
  );
};
