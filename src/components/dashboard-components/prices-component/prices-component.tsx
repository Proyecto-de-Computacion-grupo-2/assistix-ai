import { Container } from "react-bootstrap";
import PriceChangeCard from "./price-card/price-card";

export default function PricesComponent() {
    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0 me-1 my-1" style={{ minHeight: '30vh' }} fluid>
            <Container className="py-1 border-bottom m-0">
                <strong className="text-secondary">Proximos precios</strong>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '25vh' }}>
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
            </Container>
        </Container>
    )
}