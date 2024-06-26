import axios from 'axios';

interface AuthResponse {
    access_token: string;
}

export async function getAuthToken(email: string, password: string): Promise<AuthResponse | null> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error authenticating a user', error);
        return null;
    }
}

export async function setRegister(id_user: string, email: string, password: string): Promise<AuthResponse | null> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/register`, {
            id_user,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error registering a user', error);
        return null;
    }
}