import {Container} from "react-bootstrap";
import './recomendation.scss'
import '../../../styles/dashboard-page.scss'
import {useEffect, useState} from "react";
import {UserRecommendations} from "../../../models/player.ts";
import {getPlayerRecommendations,} from "../../../services/player-service/players-service.ts";
import PlayerFaceCard from "../player/player-face-card.tsx";
import {ChatBotIcon} from "../icons/icons.tsx";


export default function RecommendationSection() {
    const [recommendationsData, setRecommendationsData] = useState<UserRecommendations[]>([]);

    useEffect(() => {
        getPlayerRecommendations(Number(12705845))
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
                <ChatBotIcon fill={'gray'} className='ms-2'/>
            </Container>
            {
                no_recommendations ?
                    <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight: '78vh'}} fluid>
                        {recommendationsData.map((player, index) => (
                            <PlayerFaceCard key={index} player={player}>
                                <p className='fw-bold me-1' style={{color:'blue'}} >{player.operation_type}</p>
                                <ChatBotIcon fill='blue' className=''/>
                            </PlayerFaceCard>
                        ))}
                    </Container>

                    :

                    <Container className="flex-grow-1 px-1 scroll-section h-100 d-flex flex-column justify-content-center align-items-center" fluid>
                        <p className="text-secondary">No hay recomendaciones</p>
                    </Container>
            }
        </Container>
    )
}