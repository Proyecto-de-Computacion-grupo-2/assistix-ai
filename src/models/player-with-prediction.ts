import { Player } from './player';

export interface PlayerWithPointPrediction extends Player {
    point_prediction: number;
}