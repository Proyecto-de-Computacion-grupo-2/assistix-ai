import ChangeRecomendationCard from "./recomendation-card/change-recomendation-card";
import RecomendtionCard from "./recomendation-card/recomendation-card";
import './recomendation.scss'

export default function RecomendationSection() {

    const recomendations = true;

    return (
        <div className="container bg-white h-100 p-1 rounded-4 d-flex flex-column">
            <div className="container py-1 border-bottom">
                <strong className="text-secondary">Recomendaciones Assistix AI</strong>
            </div>
            {
                recomendations ?
                    <div className="container container flex-grow-1 px-1 scroll-section" style={{ maxHeight: '23vh' }}>
                        <RecomendtionCard />
                        <ChangeRecomendationCard />
                        <RecomendtionCard />
                        <ChangeRecomendationCard />
                        <RecomendtionCard />
                    </div>
                    :
                    <div className="container container flex-grow-1 px-1 scroll-section h-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="text-secondary">No hay recomendaciones</p>
                    </div>
            }


        </div>
    )
}