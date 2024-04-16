import { Container } from "react-bootstrap";
import PriceChangeCard from "./price-card/price-card";

import '../../../styles/dashboard-page.scss'

export default function PricesComponent() {
    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Proximos precios</strong>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }}>
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
            </Container>
        </Container>
    )
}