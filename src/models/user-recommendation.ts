export class UserRecommendation {
    id_user_recommendation: number;
    id_user: number;
    id_mundo_deportivo: number;
    recommendation_day: Date;
    my_team_recommendation: boolean;
    market_team_recommendation: boolean;
    gameweek: number;
    operation_type: string;
    expected_value_percentage: number;
    expected_value_day: Date;

    constructor(
        id_user_recommendation: number = 0,
        id_user: number = 0,
        id_mundo_deportivo: number = 0,
        recommendation_day: Date = new Date(),
        my_team_recommendation: boolean = false,
        market_team_recommendation: boolean = false,
        gameweek: number = 0,
        operation_type: string = "",
        expected_value_percentage: number = 0,
        expected_value_day: Date = new Date()
    ) {
        this.id_user_recommendation = id_user_recommendation;
        this.id_user = id_user;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.recommendation_day = recommendation_day;
        this.my_team_recommendation = my_team_recommendation;
        this.market_team_recommendation = market_team_recommendation;
        this.gameweek = gameweek;
        this.operation_type = operation_type;
        this.expected_value_percentage = expected_value_percentage;
        this.expected_value_day = expected_value_day;
    }
}
