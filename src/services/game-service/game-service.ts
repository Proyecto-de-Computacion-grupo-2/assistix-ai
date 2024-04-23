import axios from 'axios';
import {Game} from "../../models/game.ts";

export default async function getGames(id: number): Promise<Game[]> {
    return axios.get<Game[]>(`${import.meta.env.VITE_API_URL}players/games/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching games', error);
            return [];
        })
}