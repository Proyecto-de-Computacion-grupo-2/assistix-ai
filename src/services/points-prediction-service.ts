import axios from 'axios';
import { Player } from '../../models/player';

export default async function getPlayer(id:number): Promise<Player> {
    return axios.get<Player>(`${import.meta.env.VITE_API_URL}players/${id}`)
        .then(
        response => {
            return response.data;
        }).catch(error => {
            console.error('Error fetching player', error);
            return new Player();
        })
}