import { Player } from './player';

export interface PlayerWithPointPrediction extends Player {
    point_prediction: number;
}

export interface PlayerWithPricePrediction extends Player {
    latest_prediction: number;
    percentage_change: number;
}