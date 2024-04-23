import axios from 'axios';
import { Player } from '../../models/player';

export default async function getPlayers(): Promise<Player[]> {
    return axios.get<Player[]>(`${import.meta.env.VITE_API_URL}players`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching players', error);
            return [];
        })
}