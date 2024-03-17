import { Container } from "react-bootstrap";
import PriceChangeCard from "./price-card/price-card";

import '../../../pages/dashboard/dashboard-page.scss'

export default function PricesComponent() {
    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0 custom-margin custom-height right-custom-margin" style={{ minHeight: '30vh', maxHeight: '35vh !important' }} fluid>
            <Container className="py-1 border-bottom m-0">
                <strong className="text-secondary">Proximos precios</strong>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '30vh' }}>
                <PriceChangeCard up={true} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={false} />
                <PriceChangeCard up={true} />
                <PriceChangeCard up={true} />
            </Container>
        </Container>
    )
}