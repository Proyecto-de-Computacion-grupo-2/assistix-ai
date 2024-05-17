import api from "../api-interceptor.ts";
import { LeagueUser } from "../../models/league-user";

export default function getLeagueRanking(): Promise<LeagueUser[]> {
    return api.get<LeagueUser[]>(`${import.meta.env.VITE_API_URL}users_table`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error(error)
                return [];
            })
}