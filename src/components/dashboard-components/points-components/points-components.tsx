import { Container } from "react-bootstrap";
import PointsCard from "./points-card.tsx";

import '../../../styles/dashboard-page.scss'
import {useEffect, useState} from "react";
import {Player} from "../../../models/player.ts";
import {useParams} from "react-router-dom";
import getPlayer from "../../../services/player-service/player-service.ts";

export default function PredictionComponent() {

    const [player, setPlayer] = useState<Player>();
    const { id } = useParams();

    useEffect(() => {
        getPlayer(Number(id))
            .then(player => {
                console.log(player); // Log the player data to the console
                setPlayer(player);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

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