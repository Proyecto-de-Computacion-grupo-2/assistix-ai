import axios from 'axios';
import { Player, PlayersInMarket, PlayersUser, UserRecommendations } from '../../models/player';
import { PlayerWithPointPrediction, PlayerWithPricePrediction } from '../../models/player';

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

export async function getPlayersWithPricePrediction(): Promise<PlayerWithPricePrediction[]> {
    return axios.get<PlayerWithPricePrediction[]>(`${import.meta.env.VITE_API_URL}players_prediction/value`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players with value prediction', error);
                return [];
            })
}

export async function getPlayerRecommendations(id: number): Promise<UserRecommendations[]> {
    return axios.get<UserRecommendations[]>(`${import.meta.env.VITE_API_URL}user_recommendation/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching user recommendations', error);
                return [];
            })
}

export async function getPlayersInMarket(): Promise<PlayersInMarket[]> {
    return axios.get<PlayersInMarket[]>(`${import.meta.env.VITE_API_URL}players_market`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players in market', error);
                return [];
            })
}

export async function getUserPlayers(id: number): Promise<PlayersUser[]> {
    return axios.get<PlayersUser[]>(`${import.meta.env.VITE_API_URL}players_user/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching user players', error);
                return [];
            })
}

export type LineUps = {
    type: string,
    goalkeeper: PlayerWithPointPrediction,
    defense: PlayerWithPointPrediction[],
    midfield: PlayerWithPointPrediction[],
    attack: PlayerWithPointPrediction[]
}

export async function getRecommendationsLineUps(id: number): Promise<LineUps[]> {
    return axios.get<LineUps[]>(`${import.meta.env.VITE_API_URL}user_recommendation/lineup/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching recommendations line ups', error);
                return [];
            })
}