export class PredictionPoint {
    id_prediction_points: number;
    id_mundo_deportivo: number;
    gameweek: number;
    date_prediction: Date;
    point_prediction: number;

    constructor(
        id_prediction_points: number = 0,
        id_mundo_deportivo: number = 0,
        gameweek: number = 0,
        date_prediction: Date = new Date(),
        point_prediction: number = 0
    ) {
        this.id_prediction_points = id_prediction_points;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.gameweek = gameweek;
        this.date_prediction = date_prediction;
        this.point_prediction = point_prediction;
    }
}