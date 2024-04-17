export class PredictionPoints {
    idPredictionPoints: number;
    idMundoDeportivo: number;
    gameweek: number;
    datePrediction: Date;
    pointPrediction: number;

    constructor(
        idPredictionPoints: number = 0,
        idMundoDeportivo: number = 0,
        gameweek: number = 0,
        datePrediction: Date = new Date(),
        pointPrediction: number = 0
    ) {
        this.idPredictionPoints = idPredictionPoints;
        this.idMundoDeportivo = idMundoDeportivo;
        this.gameweek = gameweek;
        this.datePrediction = datePrediction;
        this.pointPrediction = pointPrediction;
    }
}
