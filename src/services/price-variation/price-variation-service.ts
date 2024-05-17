import {PriceVariation} from "../../models/price-variation.ts";
import api from "../api-interceptor.js";

export async function getPriceVariation(id: number): Promise<PriceVariation[]> {
    return api.get<PriceVariation[]>(`${import.meta.env.VITE_API_URL}players/value/${id}`)
        .then(
            response => {
                return response.data;
            }).catch(error => {
            console.error('Error fetching player', error);
            return [new PriceVariation()];
        })
}