// models/player.ts
export class Player {
    idMundoDeportivo: number;
    idSofaScore: number;
    idMarca: number;
    idUser: number;
    fullName: string;
    position: number;
    playerValue: number;
    isInMarket: boolean;
    sellPrice: number;
    photoBody: string;
    photoFace: string;
    season1516: number;
    season1617: number;
    season1718: number;
    season1819: number;
    season1920: number;
    season2021: number;
    season2122: number;
    season2223: number;
    season2324: number;

    constructor(
        idMundoDeportivo: number = 0,
        idSofaScore: number = 0,
        idMarca: number = 0,
        idUser: number = 0,
        fullName: string = "",
        position: number = 0,
        playerValue: number = 0,
        isInMarket: boolean = false,
        sellPrice: number = 0,
        photoBody: string = "",
        photoFace: string = "",
        season1516: number = 0,
        season1617: number = 0,
        season1718: number = 0,
        season1819: number = 0,
        season1920: number = 0,
        season2021: number = 0,
        season2122: number = 0,
        season2223: number = 0,
        season2324: number = 0
    ) {
        this.idMundoDeportivo = idMundoDeportivo;
        this.idSofaScore = idSofaScore;
        this.idMarca = idMarca;
        this.idUser = idUser;
        this.fullName = fullName;
        this.position = position;
        this.playerValue = playerValue;
        this.isInMarket = isInMarket;
        this.sellPrice = sellPrice;
        this.photoBody = photoBody;
        this.photoFace = photoFace;
        this.season1516 = season1516;
        this.season1617 = season1617;
        this.season1718 = season1718;
        this.season1819 = season1819;
        this.season1920 = season1920;
        this.season2021 = season2021;
        this.season2122 = season2122;
        this.season2223 = season2223;
        this.season2324 = season2324;
    }
}
