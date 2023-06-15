// components/SignUpForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Here, you can perform user registration logic (e.g., API call) to create a new account
        const user = {
            email,
            password,
        };
        // Assuming registration is successful, dispatch the setUser action
        dispatch(setUser(user));
        // You can also save the user details in local storage or cookies for persistent login
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
