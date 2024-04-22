export class GlobalRecommendation {
    id_global_recommendation: number;
    id_mundo_deportivo: number;
    lineup: string;
    gameweek: number;

    constructor(
        id_global_recommendation: number = 0,
        id_mundo_deportivo: number = 0,
        lineup: string = "",
        gameweek: number = 0
    ) {
        this.id_global_recommendation = id_global_recommendation;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.lineup = lineup;
        this.gameweek = gameweek;
    }
}