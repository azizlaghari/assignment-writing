import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword } from '../redux/registrationSlice';
import "./RegistrationForm.css"

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const { name, email, password } = useSelector((state) => state.registration);

    const handleNameChange = (event) => {
        dispatch(setName(event.target.value));
    };

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Save the form data in local storage or perform an API request here
        // For demonstration purposes, we will store the data in local storage
        const registrationData = { name, email, password };
        localStorage.setItem('registrationData', JSON.stringify(registrationData));

        // Reset the form after submission
        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
    };

    return (
        
        <form onSubmit={handleSubmit}>
                  <h1>Registration Form</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
