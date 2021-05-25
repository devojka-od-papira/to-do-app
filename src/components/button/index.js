import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Button({ name, onClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onClick());
  };

  return <button onClick={handleClick}>{name}</button>;
}

export default Button;
