export class GlobalRecommendation {
    idGlobalRecommendation: number;
    idMundoDeportivo: number;
    lineup: string;
    gameweek: number;

    constructor(
        idGlobalRecommendation: number = 0,
        idMundoDeportivo: number = 0,
        lineup: string = "",
        gameweek: number = 0
    ) {
        this.idGlobalRecommendation = idGlobalRecommendation;
        this.idMundoDeportivo = idMundoDeportivo;
        this.lineup = lineup;
        this.gameweek = gameweek;
    }
}
