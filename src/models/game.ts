export class Game {
    idGame: number;
    idGw: number;
    idMundoDeportivo: number;
    schedule: string;
    gameWeek: number;
    team: number;
    opposingTeam: number;
    mixed: number;
    asScore: number;
    marcaScore: number;
    mundoDeportivoScore: number;
    sofaScore: number;
    currentValue: number;
    points: number;
    average: number;
    matches: number;
    goalsMetadata: number;
    cards: number;
    yellowCard: number;
    doubleYellowCard: number;
    redCard: number;
    totalPasses: number;
    accuratePasses: number;
    totalLongBalls: number;
    accurateLongBalls: number;
    totalCross: number;
    accurateCross: number;
    totalClearance: number;
    clearanceOffLine: number;
    aerialLost: number;
    aerialWon: number;
    duelLost: number;
    duelWon: number;
    dispossessed: number;
    challengeLost: number;
    totalContest: number;
    wonContest: number;
    goodHighClaim: number;
    punches: number;
    errorLeadToAShot: number;
    errorLeadToAGoal: number;
    shotOffTarget: number;
    onTargetScoringAttempt: number;
    hitWoodwork: number;
    blockedScoringAttempt: number;
    outfielderBlock: number;
    bigChanceCreated: number;
    bigChanceMissed: number;
    penaltyConceded: number;
    penaltyWon: number;
    penaltyMiss: number;
    penaltySave: number;
    goals: number;
    ownGoals: number;
    savedShotsFromInsideTheBox: number;
    saves: number;
    goalAssist: number;
    goalsAgainst: number;
    goalsAvoided: number;
    interceptionWon: number;
    totalInterceptions: number;
    totalKeeperSweeper: number;
    accurateKeeperSweeper: number;
    totalTackle: number;
    wasFouled: number;
    fouls: number;
    totalOffside: number;
    minutesPlayed: number;
    touches: number;
    lastManTackle: number;
    possessionLostControl: number;
    expectedGoals: number;
    goalsPrevented: number;
    keyPass: number;
    expectedAssists: number;
    ts: Date;

    constructor(
        idGame: number = 0,
        idGw: number = 0,
        idMundoDeportivo: number = 0,
        schedule: string = "",
        gameWeek: number = 0,
        team: number = 0,
        opposingTeam: number = 0,
        mixed: number = 0,
        asScore: number = 0,
        marcaScore: number = 0,
        mundoDeportivoScore: number = 0,
        sofaScore: number = 0,
        currentValue: number = 0,
        points: number = 0,
        average: number = 0,
        matches: number = 0,
        goalsMetadata: number = 0,
        cards: number = 0,
        yellowCard: number = 0,
        doubleYellowCard: number = 0,
        redCard: number = 0,
        totalPasses: number = 0,
        accuratePasses: number = 0,
        totalLongBalls: number = 0,
        accurateLongBalls: number = 0,
        totalCross: number = 0,
        accurateCross: number = 0,
        totalClearance: number = 0,
        clearanceOffLine: number = 0,
        aerialLost: number = 0,
        aerialWon: number = 0,
        duelLost: number = 0,
        duelWon: number = 0,
        dispossessed: number = 0,
        challengeLost: number = 0,
        totalContest: number = 0,
        wonContest: number = 0,
        goodHighClaim: number = 0,
        punches: number = 0,
        errorLeadToAShot: number = 0,
        errorLeadToAGoal: number = 0,
        shotOffTarget: number = 0,
        onTargetScoringAttempt: number = 0,
        hitWoodwork: number = 0,
        blockedScoringAttempt: number = 0,
        outfielderBlock: number = 0,
        bigChanceCreated: number = 0,
        bigChanceMissed: number = 0,
        penaltyConceded: number = 0,
        penaltyWon: number = 0,
        penaltyMiss: number = 0,
        penaltySave: number = 0,
        goals: number = 0,
        ownGoals: number = 0,
        savedShotsFromInsideTheBox: number = 0,
        saves: number = 0,
        goalAssist: number = 0,
        goalsAgainst: number = 0,
        goalsAvoided: number = 0,
        interceptionWon: number = 0,
        totalInterceptions: number = 0,
        totalKeeperSweeper: number = 0,
        accurateKeeperSweeper: number = 0,
        totalTackle: number = 0,
        wasFouled: number = 0,
        fouls: number = 0,
        totalOffside: number = 0,
        minutesPlayed: number = 0,
        touches: number = 0,
        lastManTackle: number = 0,
        possessionLostControl: number = 0,
        expectedGoals: number = 0,
        goalsPrevented: number = 0,
        keyPass: number = 0,
        expectedAssists: number = 0,
        ts: Date = new Date()
    ) {
        this.idGame = idGame;
        this.idGw = idGw;
        this.idMundoDeportivo = idMundoDeportivo;
        this.schedule = schedule;
        this.gameWeek = gameWeek;
        this.team = team;
        this.opposingTeam = opposingTeam;
        this.mixed = mixed;
        this.asScore = asScore;
        this.marcaScore = marcaScore;
        this.mundoDeportivoScore = mundoDeportivoScore;
        this.sofaScore = sofaScore;
        this.currentValue = currentValue;
        this.points = points;
        this.average = average;
        this.matches = matches;
        this.goalsMetadata = goalsMetadata;
        this.cards = cards;
        this.yellowCard = yellowCard;
        this.doubleYellowCard = doubleYellowCard;
        this.redCard = redCard;
        this.totalPasses = totalPasses;
        this.accuratePasses = accuratePasses;
        this.totalLongBalls = totalLongBalls;
        this.accurateLongBalls = accurateLongBalls;
        this.totalCross = totalCross;
        this.accurateCross = accurateCross;
        this.totalClearance = totalClearance;
        this.clearanceOffLine = clearanceOffLine;
        this.aerialLost = aerialLost;
        this.aerialWon = aerialWon;
        this.duelLost = duelLost;
        this.duelWon = duelWon;
        this.dispossessed = dispossessed;
        this.challengeLost = challengeLost;
        this.totalContest = totalContest;
        this.wonContest = wonContest;
        this.goodHighClaim = goodHighClaim;
        this.punches = punches;
        this.errorLeadToAShot = errorLeadToAShot;
        this.errorLeadToAGoal = errorLeadToAGoal;
        this.shotOffTarget = shotOffTarget;
        this.onTargetScoringAttempt = onTargetScoringAttempt;
        this.hitWoodwork = hitWoodwork;
        this.blockedScoringAttempt = blockedScoringAttempt;
        this.outfielderBlock = outfielderBlock;
        this.bigChanceCreated = bigChanceCreated;
        this.bigChanceMissed = bigChanceMissed;
        this.penaltyConceded = penaltyConceded;
        this.penaltyWon = penaltyWon;
        this.penaltyMiss = penaltyMiss;
        this.penaltySave = penaltySave;
        this.goals = goals;
        this.ownGoals = ownGoals;
        this.savedShotsFromInsideTheBox = savedShotsFromInsideTheBox;
        this.saves = saves;
        this.goalAssist = goalAssist;
        this.goalsAgainst = goalsAgainst;
        this.goalsAvoided = goalsAvoided;
        this.interceptionWon = interceptionWon;
        this.totalInterceptions = totalInterceptions;
        this.totalKeeperSweeper = totalKeeperSweeper;
        this.accurateKeeperSweeper = accurateKeeperSweeper;
        this.totalTackle = totalTackle;
        this.wasFouled = wasFouled;
        this.fouls = fouls;
        this.totalOffside = totalOffside;
        this.minutesPlayed = minutesPlayed;
        this.touches = touches;
        this.lastManTackle = lastManTackle;
        this.possessionLostControl = possessionLostControl;
        this.expectedGoals = expectedGoals;
        this.goalsPrevented = goalsPrevented;
        this.keyPass = keyPass;
        this.expectedAssists = expectedAssists;
        this.ts = ts;
    }
}
