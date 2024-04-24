import axios from 'axios';
import {PlayerIdInformation, PlayerLastPrediction} from '../../models/player';
import {PriceVariation} from "../../models/price-variation.ts";

export async function getPlayer(id: number): Promise<PlayerIdInformation> {
    return axios.get<PlayerIdInformation>(`${import.meta.env.VITE_API_URL}players/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return null;
        })
}

export async function getPriceVariation(id: number): Promise<PriceVariation[]> {
    return axios.get<PriceVariation[]>(`${import.meta.env.VITE_API_URL}players/value/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return [new PriceVariation()];
        })
}

export async function getPlayerLastPrediction(id: number): Promise<PlayerLastPrediction> {
    return axios.get<PlayerLastPrediction>(`${import.meta.env.VITE_API_URL}players/next_prediction/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return null;
        })
}