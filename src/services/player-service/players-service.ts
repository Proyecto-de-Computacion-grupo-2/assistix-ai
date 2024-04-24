import axios from 'axios';
import {Player} from '../../models/player';
import {PlayerWithPointPrediction} from '../../models/player-with-prediction';

export async function getPlayers(): Promise<Player[]> {
    return axios.get<Player[]>(`${import.meta.env.VITE_API_URL}players`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching players', error);
            return [];
        })
}

export async function getPlayersWithPointPrediction(): Promise<PlayerWithPointPrediction[]> {
    return axios.get<PlayerWithPointPrediction[]>(`${import.meta.env.VITE_API_URL}players_prediction/points`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching players with point prediction', error);
            return [];
        })
}