import api from "../api-interceptor.ts";
import {Game} from "../../models/game.ts";

export async function getGames(id: number): Promise<Game[]> {
    return api.get<Game[]>(`${import.meta.env.VITE_API_URL}players/games/${id}`)
        .then(
            response => {
                console.log('Games fetched', response.data)
                return response.data;
            }).catch(error => {
            console.error('Error fetching games', error);
            return [];
        })
}

export async function getStreak(id: number): Promise<Game[]> {
    return api.get<Game[]>(`${import.meta.env.VITE_API_URL}players/streak/${id}`)
        .then(
            response => {
                console.log('Streak fetched', response.data)
                return response.data;
            }).catch(error => {
            console.error('Error fetching player streak', error);
            return [];
        })
}