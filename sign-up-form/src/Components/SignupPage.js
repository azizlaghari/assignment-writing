// SignupPage.js
import React from 'react';
import SignupForm from './SignupForm';

const SignupPage = () => {
    // You can use useSelector to access Redux state if needed
    // Example: const isLoading = useSelector((state) => state.isLoading);

    return (
        <>
            <h1>Sign Up</h1>
            <SignupForm />
        </>
    );
};

export default SignupPage;
