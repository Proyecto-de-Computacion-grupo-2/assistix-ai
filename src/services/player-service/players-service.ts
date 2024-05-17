import api from "../api-interceptor.js";
import { BestPlayer, Player, PlayersInMarket, PlayersUser, UserRecommendations } from '../../models/player';
import { PlayerWithPointPrediction, PlayerWithPricePrediction } from '../../models/player';

export async function getPlayers(): Promise<Player[]> {
    return api.get<Player[]>(`${import.meta.env.VITE_API_URL}players`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players', error);
                return [];
            })
}

export async function getPlayersWithPointPrediction(): Promise<PlayerWithPointPrediction[]> {
    return api.get<PlayerWithPointPrediction[]>(`${import.meta.env.VITE_API_URL}players_prediction/points`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players with point prediction', error);
                return [];
            })
}

export async function getPlayersWithPricePrediction(): Promise<PlayerWithPricePrediction[]> {
    return api.get<PlayerWithPricePrediction[]>(`${import.meta.env.VITE_API_URL}players_prediction/value`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players with value prediction', error);
                return [];
            })
}

export async function getPlayerRecommendations(id: number): Promise<UserRecommendations[]> {
    return api.get<UserRecommendations[]>(`${import.meta.env.VITE_API_URL}user_recommendation/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching user recommendations', error);
                return [];
            })
}

export async function getPlayersInMarket(): Promise<PlayersInMarket[]> {
    return api.get<PlayersInMarket[]>(`${import.meta.env.VITE_API_URL}players_market`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching players in market', error);
                return [];
            })
}

export async function getUserPlayers(id: number): Promise<PlayersUser[]> {
    return api.get<PlayersUser[]>(`${import.meta.env.VITE_API_URL}players_user/${id}`)
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
    return api.get<LineUps[]>(`${import.meta.env.VITE_API_URL}user_recommendation/lineup/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching recommendations line ups', error);
                return [];
            })
}

export async function getBestPlayers(): Promise<BestPlayer[]> {
    return api.get<BestPlayer[]>(`${import.meta.env.VITE_API_URL}players_best`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error('Error fetching best players', error);
                return [];
            })
}