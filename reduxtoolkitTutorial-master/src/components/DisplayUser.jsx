import React from "react";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);

  return <div>hi</div>;
};

export default DisplayUser;
