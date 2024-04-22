export class LeagueUser {
    id_user: number;
    email: string;
    password: string;
    team_name: string;
    team_points: number;
    team_average: number;
    team_value: number;
    team_players: number;
    current_balance: number;
    future_balance: number;
    maximum_debt: number;
    active: boolean;

    constructor(
        id_user: number = 0,
        email: string = "",
        password: string = "",
        team_name: string = "",
        team_points: number = 0,
        team_average: number = 0.0,
        team_value: number = 0,
        team_players: number = 0,
        current_balance: number = 0,
        future_balance: number = 0,
        maximum_debt: number = 0,
        active: boolean = false
    ) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
        this.team_name = team_name;
        this.team_points = team_points;
        this.team_average = team_average;
        this.team_value = team_value;
        this.team_players = team_players;
        this.current_balance = current_balance;
        this.future_balance = future_balance;
        this.maximum_debt = maximum_debt;
        this.active = active;
    }
}
