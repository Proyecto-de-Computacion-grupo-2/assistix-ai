import { Container } from "react-bootstrap";
import './recomendation.scss'
import '../../../styles/dashboard-page.scss'
import { useEffect, useState } from "react";
import { UserRecommendations } from "../../../models/player.ts";
import { getPlayerRecommendations, } from "../../../services/player-service/players-service.ts";
import PlayerFaceCard from "../player/player-face-card.tsx";
import { ChatBotIcon } from "../icons/icons.tsx";
import { LoadingSpinner } from "../Utils.tsx";


export default function RecommendationSection() {
    const [recommendationsData, setRecommendationsData] = useState<UserRecommendations[]>([]);
    const id_user = localStorage.getItem('id_user');

    useEffect(() => {
        getPlayerRecommendations(Number(id_user))
            .then(recommendations => {
                setRecommendationsData(recommendations);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    let no_recommendations = true;
    {
        if (recommendationsData.length === 0) {
            no_recommendations = false;
        }
    }

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0 align-items-center" fluid>
                <strong className="text-secondary">Recomendaciones Assistix AI</strong>
                <ChatBotIcon fill={'gray'} className='ms-2' />
            </Container>
            {
                no_recommendations ?
                    <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }} fluid>
                        {recommendationsData.map((player, index) => (
                            <PlayerFaceCard key={index} player={player}>
                                <p className='fw-bold me-1 text-truncate' style={{ color: 'blue' }}>{player.operation_type}</p>
                                <ChatBotIcon fill='blue' className='' />
                            </PlayerFaceCard>
                        ))}
                    </Container>
                    :
                    <LoadingSpinner />
            }
        </Container>
    )
}