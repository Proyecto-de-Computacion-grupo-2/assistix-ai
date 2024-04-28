import axios from "axios";
import { LeagueUser } from "../../models/league-user";

export default function getLeagueRanking(): Promise<LeagueUser[]> {
    return axios.get<LeagueUser[]>(`${import.meta.env.VITE_API_URL}users_table`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
                console.error(error)
                return [];
            })
}