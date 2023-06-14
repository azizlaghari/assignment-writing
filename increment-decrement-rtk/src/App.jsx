import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./Redux/counterSlice";
import './App.css'

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button type='button' className='btn btn-primary' onClick={() => dispatch(increment())}>Increment</button>
      <button type='button' className='btn btn-danger' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
export default App
