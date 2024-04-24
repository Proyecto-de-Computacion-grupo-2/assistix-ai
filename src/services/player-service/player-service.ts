import axios from 'axios';
import {Player} from '../../models/player';
import {PriceVariation} from "../../models/price-variation.ts";

export async function getPlayer(id: number): Promise<Player> {
    return axios.get<Player>(`${import.meta.env.VITE_API_URL}players/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return new Player();
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
