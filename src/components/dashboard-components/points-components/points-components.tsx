import '../../../styles/dashboard-page.scss'
import { Container } from "react-bootstrap";
import PointsCard from "./points-card.tsx";

export default function PredictionComponent() {

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Predicción siguiente partidos</strong>
                {/* todo MANU: Add the search bar here*/}
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }}>
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
                <PointsCard />
            </Container>
        </Container>
    )
}