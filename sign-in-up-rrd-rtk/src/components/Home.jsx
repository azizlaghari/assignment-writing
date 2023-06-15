// components/Home.js
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
