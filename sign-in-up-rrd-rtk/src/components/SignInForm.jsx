// components/SignInForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Here, you can perform authentication logic (e.g., API call) to validate the credentials
        const user = {
            email,
            password,
        };
        // Assuming authentication is successful, dispatch the setUser action
        dispatch(setUser(user));
        // You can also save the user details in local storage or cookies for persistent login
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInForm;
