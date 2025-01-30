import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decrement, increment } from "../features/counterSlice";
import { incrementByAmount } from "../features/counterSlice";

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
    </div>
  );
};

export default Counter;
