import { Container } from "react-bootstrap";
//import ChangeRecomendationCard from "./recomendation-card/change-recomendation-card";
import RecomendtionCard from "./recomendation-card/recomendation-card";
import './recomendation.scss'

import '../../../styles/dashboard-page.scss'

export default function RecomendationSection() {

    const recomendations = true;

    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0  custom-margin left-custom-margin"
            style={{ minHeight: '30vh' }} fluid>
            {/* ms-1 mb-1 */}
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Recomendaciones Assistix AI</strong>
            </Container>
            {
                recomendations ?
                    <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '30vh' }} fluid>
                        <RecomendtionCard />
                        <RecomendtionCard />
                        <RecomendtionCard />
                        <RecomendtionCard />
                        <RecomendtionCard />
                    </Container>
                    :
                    <Container
                        className="flex-grow-1 px-1 scroll-section h-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="text-secondary">No hay recomendaciones</p>
                    </Container>
            }
        </Container>
    )
}