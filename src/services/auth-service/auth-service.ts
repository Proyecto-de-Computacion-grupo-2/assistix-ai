import axios from 'axios';

interface AuthResponse {
    access_token: string;
}

export async function getAuthToken(id_user: string, email: string, password: string): Promise<AuthResponse | null> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, {
            id_user,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error authenticating a user', error);
        return null;
    }
}