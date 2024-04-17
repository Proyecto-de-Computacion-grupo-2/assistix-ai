export class UserRecommendation {
    idUserRecommendation: number;
    idUser: number;
    idMundoDeportivo: number;
    recommendationDay: Date;
    myTeamRecommendation: boolean;
    marketTeamRecommendation: boolean;
    gameweek: number;
    operationType: string;
    expectedValuePercentage: number;
    expectedValueDay: Date;

    constructor(
        idUserRecommendation: number = 0,
        idUser: number = 0,
        idMundoDeportivo: number = 0,
        recommendationDay: Date = new Date(),
        myTeamRecommendation: boolean = false,
        marketTeamRecommendation: boolean = false,
        gameweek: number = 0,
        operationType: string = "",
        expectedValuePercentage: number = 0,
        expectedValueDay: Date = new Date()
    ) {
        this.idUserRecommendation = idUserRecommendation;
        this.idUser = idUser;
        this.idMundoDeportivo = idMundoDeportivo;
        this.recommendationDay = recommendationDay;
        this.myTeamRecommendation = myTeamRecommendation;
        this.marketTeamRecommendation = marketTeamRecommendation;
        this.gameweek = gameweek;
        this.operationType = operationType;
        this.expectedValuePercentage = expectedValuePercentage;
        this.expectedValueDay = expectedValueDay;
    }
}
