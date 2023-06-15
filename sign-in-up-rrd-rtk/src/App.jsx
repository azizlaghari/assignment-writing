import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";

const App = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      // Perform necessary actions to navigate to the "/home" route
    } else {
      // Perform necessary actions to navigate to the "/signin" route
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <>
          <SignInForm />
          <SignUpForm />
        </>
      )}
    </div>
  );
};

export default App;
