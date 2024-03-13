import PriceChangeCard from "./price-card/price-card";

export default function PricesComponent() {
    return (
        <div className="container bg-white h-100 p-1 rounded-4 d-flex flex-column ">
            <div className="container py-1 border-bottom">
                <strong className="text-secondary">Proximos precios</strong>
            </div>
            <div className="container flex-grow-1 px-1 scroll-section" style={{ maxHeight: '23vh' }}>
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
            </div>
        </div>
    )
}