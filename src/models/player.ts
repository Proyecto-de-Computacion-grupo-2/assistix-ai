export class Player {
    id_mundo_deportivo: number;
    id_sofa_score: number;
    id_marca: number;
    id_user: number;
    full_name: string;
    position: number;
    player_value: number;
    is_in_market: boolean;
    sell_price: number;
    photo_body: string;
    photo_face: string;
    season_15_16: number;
    season_16_17: number;
    season_17_18: number;
    season_18_19: number;
    season_19_20: number;
    season_20_21: number;
    season_21_22: number;
    season_22_23: number;
    season_23_24: number;

    constructor(
        id_mundo_deportivo: number = 0,
        id_sofa_score: number = 0,
        id_marca: number = 0,
        id_user: number = 0,
        full_name: string = "",
        position: number = 0,
        player_value: number = 0,
        is_in_market: boolean = false,
        sell_price: number = 0,
        photo_body: string = "",
        photo_face: string = "",
        season_15_16: number = 0,
        season_16_17: number = 0,
        season_17_18: number = 0,
        season_18_19: number = 0,
        season_19_20: number = 0,
        season_20_21: number = 0,
        season_21_22: number = 0,
        season_22_23: number = 0,
        season_23_24: number = 0
    ) {
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.id_sofa_score = id_sofa_score;
        this.id_marca = id_marca;
        this.id_user = id_user;
        this.full_name = full_name;
        this.position = position;
        this.player_value = player_value;
        this.is_in_market = is_in_market;
        this.sell_price = sell_price;
        this.photo_body = photo_body;
        this.photo_face = photo_face;
        this.season_15_16 = season_15_16;
        this.season_16_17 = season_16_17;
        this.season_17_18 = season_17_18;
        this.season_18_19 = season_18_19;
        this.season_19_20 = season_19_20;
        this.season_20_21 = season_20_21;
        this.season_21_22 = season_21_22;
        this.season_22_23 = season_22_23;
        this.season_23_24 = season_23_24;
    }
}

export interface PlayerWithPointPrediction extends Player {
    prediction: number;
}

export interface PlayerWithPricePrediction extends Player {
    latest_prediction: number;
    percentage_change: number;
}

export interface UserRecommendations extends Player {
    operation_type: string;
    expected_value_percentage: number;
}

export interface PlayersInMarket extends Player {
    sell_price: number;
    is_in_market: boolean;
}

export interface PlayersUser extends Player {
    latest_game: number;
}

export interface BestPlayer extends Player {
    game_week: number;
    mixed: number;
}

export interface PlayerIdInformation extends Player {
    user_name: string;
    team: string;
}

export interface PlayerLastPrediction extends Player {
    gameweek: number;
    point_prediction: number;
}
