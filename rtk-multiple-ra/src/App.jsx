import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import { setName, setEmail } from './redux/userSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

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

export default App;
