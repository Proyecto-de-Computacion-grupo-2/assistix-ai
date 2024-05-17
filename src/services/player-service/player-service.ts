import api from "../api-interceptor.js";
import {PlayerIdInformation, PlayerLastPrediction} from '../../models/player';

export async function getPlayer(id: number): Promise<PlayerIdInformation | null> {
    return api.get<PlayerIdInformation>(`${import.meta.env.VITE_API_URL}players/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return null;
        })
}

export async function getPlayerLastPrediction(id: number): Promise<PlayerLastPrediction | null> {
    return api.get<PlayerLastPrediction>(`${import.meta.env.VITE_API_URL}players/next_prediction/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return null;
        })
}