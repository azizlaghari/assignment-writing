// Import necessary dependencies from React and Redux.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import the 'increment' and 'decrement' actions from the 'counterSlice'.
import { increment, decrement } from './redux/counterSlice';

// Import the 'setName' and 'setEmail' actions from the 'userSlice'.
import { setName, setEmail } from './redux/userSlice';

// Functional component 'App'.
function App() {
  // Select the 'counter' value from the Redux store using 'useSelector' hook.
  const counter = useSelector((state) => state.counter.value);

  // Select the 'user' object from the Redux store using 'useSelector' hook.
  const user = useSelector((state) => state.user);

  // Get the 'dispatch' function using 'useDispatch' hook to dispatch actions.
  const dispatch = useDispatch();

  // Handler function to dispatch 'setName' action on name input change.
  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  // Handler function to dispatch 'setEmail' action on email input change.
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  // Return the JSX for the App component.
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className='btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn btn-warning' onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <h2>User Info</h2>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleEmailChange}
        />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

// Export the App component as the default export.
export default App;
