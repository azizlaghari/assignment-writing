// SignupForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validationSchema from './validationSchema';

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values) => {
        // Dispatch an action to handle the signup process using Redux
        // Example: dispatch(signupAction(values));
        // After successful signup, navigate to another page
        history.push('/dashboard');
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <button type="submit">Sign Up</button>
            </Form>
        </Formik>
    );
};

export default SignupForm;
