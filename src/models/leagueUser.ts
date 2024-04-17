export class LeagueUser {
    idUser: number;
    email: string;
    password: string;
    teamName: string;
    teamPoints: number;
    teamAverage: number;
    teamValue: number;
    teamPlayers: number;
    currentBalance: number;
    futureBalance: number;
    maximumDebt: number;

    constructor(
        idUser: number = 0,
        email: string = "",
        password: string = "",
        teamName: string = "",
        teamPoints: number = 0,
        teamAverage: number = 0,
        teamValue: number = 0,
        teamPlayers: number = 0,
        currentBalance: number = 0,
        futureBalance: number = 0,
        maximumDebt: number = 0
    ) {
        this.idUser = idUser;
        this.email = email;
        this.password = password;
        this.teamName = teamName;
        this.teamPoints = teamPoints;
        this.teamAverage = teamAverage;
        this.teamValue = teamValue;
        this.teamPlayers = teamPlayers;
        this.currentBalance = currentBalance;
        this.futureBalance = futureBalance;
        this.maximumDebt = maximumDebt;
    }
}
