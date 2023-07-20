// Replace this with your actual API URL
const API_URL = 'https://example-api.com';

export const signUpAPI = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Sign-up failed. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
