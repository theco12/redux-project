import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/counter";

export default function counter() {
  return (
    <div>
      <Counter />
    </div>
  );
}
