import api from "../api-interceptor.ts";
import {LeagueUser} from "../../models/league-user.ts";

export async function getPlayingUsers(): Promise<LeagueUser[]> {
    return api.get<LeagueUser[]>(`${import.meta.env.VITE_API_URL}admin`)
        .then(
            response => {
                console.log('Users fetched', response.data);
                return response.data;
            }).catch(error => {
            console.error('Error fetching users', error);
            return [];
        })
}

export async function changeUserState(id: number, active: boolean): Promise<LeagueUser[]> {
    return api.get<LeagueUser[]>(`${import.meta.env.VITE_API_URL}admin/${id}/${active}`)
        .then(
            response => {
                console.log('League user state changed', response.data);
                return response.data;
            }).catch(error => {
            console.error('Error fetching users', error);
            return [];
        })
}

export async function getUserMoneyDetails(id: number): Promise<LeagueUser> {
    return api.get<LeagueUser>(`${import.meta.env.VITE_API_URL}users/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching user', error);
            return new LeagueUser();
        })
}