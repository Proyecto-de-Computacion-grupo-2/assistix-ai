import axios from 'axios';
import {Absence} from "../../models/absence.ts";

export async function getPlayerAbsences(id: number): Promise<Absence[]> {
    return axios.get<Absence[]>(`${import.meta.env.VITE_API_URL}players/absence/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player absences', error);
            return [];
        })
}