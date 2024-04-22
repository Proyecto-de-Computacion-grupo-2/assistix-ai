export class PriceVariation {
    id_price_variation: number;
    id_mundo_deportivo: number;
    price_day: Date;
    price: number;
    is_prediction: boolean;

    constructor(
        id_price_variation: number = 0,
        id_mundo_deportivo: number = 0,
        price_day: Date = new Date(),
        price: number = 0,
        is_prediction: boolean = false
    ) {
        this.id_price_variation = id_price_variation;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.price_day = price_day;
        this.price = price;
        this.is_prediction = is_prediction;
    }
}