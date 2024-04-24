import {Container, Form} from "react-bootstrap";
import PointsCard from "./points-card.tsx";

import '../../../styles/dashboard-page.scss'
import React, {useEffect, useState} from "react";
import {Player} from "../../../models/player.ts";
import {useParams} from "react-router-dom";
import getPlayer from "../../../services/player-service/player-service.ts";

export default function PredictionComponent() {
    const [searchQuery, setSearchQuery] = useState('');

    const players = [
        <PointsCard full_name="John Doe" />,
        <PointsCard full_name="Alice Smith" />,
        <PointsCard full_name="Michael Johnson" />,
        <PointsCard full_name="Emily Brown" />,
        <PointsCard full_name="Daniel Lee" />,
        <PointsCard full_name="Olivia Taylor" />,
        <PointsCard full_name="William Martinez" />,
        <PointsCard full_name="Sophia Anderson" />,
        <PointsCard full_name="James Garcia" />,
        <PointsCard full_name="Emma Wilson" />,
        <PointsCard full_name="Alexander Hernandez" />,
        <PointsCard full_name="Ava Jackson" />,
        <PointsCard full_name="Benjamin White" />,
        <PointsCard full_name="Isabella Thompson" />,
        <PointsCard full_name="Lucas Moore" />,
        <PointsCard full_name="Mia Davis" />,
        <PointsCard full_name="Henry Clark" />,
        <PointsCard full_name="Charlotte Martin" />,
        <PointsCard full_name="Jacob Lewis" />,
        <PointsCard full_name="Amelia Hill" />,
    ]

    const filteredPlayers = players.filter(player =>
        player.props.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredPointsCard = players.filter(card =>
        card.props.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Predicción siguiente partidos</strong>
                {/* todo: Add the search bar here*/}
                <Container className='mt-5 mb-2' fluid>
                    <Form.Control
                        className='rounded-3 bg-light'
                        type="text"
                        placeholder="Buscar a un jugador..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Container>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }}>
                {filteredPlayers.map((player, index) => (
                    <React.Fragment key={index}>
                        {player}
                        {filteredPointsCard[index]}
                    </React.Fragment>
                ))}
            </Container>
        </Container>
    )
}