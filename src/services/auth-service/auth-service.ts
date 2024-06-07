import axios, {isAxiosError} from 'axios';

interface AuthResponse {
    access_token: string;
    error: string;
}

export async function getAuthToken(email: string, password: string): Promise<AuthResponse | null> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.error('Error authenticating a user', error.response?.data);
            return error.response?.data || { error: 'Unknown error occurred' } as AuthResponse;
        } else {
            console.error('Unexpected error', error);
            return { error: 'Unexpected error occurred' } as AuthResponse;
        }
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
        if (isAxiosError(error)) {
            console.error('Error registering a user', error.response?.data);
            return error.response?.data || { error: 'Unknown error occurred' } as AuthResponse;
        } else {
            console.error('Unexpected error', error);
            return { error: 'Unexpected error occurred' } as AuthResponse;
        }
    }
}