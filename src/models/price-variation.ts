export class PriceVariation {
    idPriceVariation: number;
    idMundoDeportivo: number;
    priceDay: Date;
    price: number;
    isPrediction: boolean;

    constructor(
        idPriceVariation: number = 0,
        idMundoDeportivo: number = 0,
        priceDay: Date = new Date(),
        price: number = 0,
        isPrediction: boolean = false
    ) {
        this.idPriceVariation = idPriceVariation;
        this.idMundoDeportivo = idMundoDeportivo;
        this.priceDay = priceDay;
        this.price = price;
        this.isPrediction = isPrediction;
    }
}
