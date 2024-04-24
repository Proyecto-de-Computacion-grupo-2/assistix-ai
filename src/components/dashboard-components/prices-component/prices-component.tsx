import {Container, Form} from "react-bootstrap";
import PriceChangeCard from "./price-card.tsx";

import '../../../styles/dashboard-page.scss'
import {useState} from "react";
import React from "react";

export default function PricesComponent() {
    const [searchQuery, setSearchQuery] = useState('');

    const players = [
        <PriceChangeCard up={true} full_name="John Doe" />,
        <PriceChangeCard up={false} full_name="Alice Smith" />,
        <PriceChangeCard up={true} full_name="Michael Johnson" />,
        <PriceChangeCard up={false} full_name="Emily Brown" />,
        <PriceChangeCard up={true} full_name="Daniel Lee" />,
        <PriceChangeCard up={false} full_name="Olivia Taylor" />,
        <PriceChangeCard up={true} full_name="William Martinez" />,
        <PriceChangeCard up={false} full_name="Sophia Anderson" />,
        <PriceChangeCard up={true} full_name="James Garcia" />,
        <PriceChangeCard up={false} full_name="Emma Wilson" />,
        <PriceChangeCard up={true} full_name="Alexander Hernandez" />,
        <PriceChangeCard up={false} full_name="Ava Jackson" />,
        <PriceChangeCard up={true} full_name="Benjamin White" />,
        <PriceChangeCard up={false} full_name="Isabella Thompson" />,
        <PriceChangeCard up={true} full_name="Lucas Moore" />,
        <PriceChangeCard up={false} full_name="Mia Davis" />,
        <PriceChangeCard up={true} full_name="Henry Clark" />,
        <PriceChangeCard up={false} full_name="Charlotte Martin" />,
        <PriceChangeCard up={true} full_name="Jacob Lewis" />,
        <PriceChangeCard up={false} full_name="Amelia Hill" />,
    ]

    const filteredPlayers = players.filter(player =>
        player.props.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredPriceChangeCards = players.filter(card =>
        card.props.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Predicción proximos precios</strong>
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
                        {filteredPriceChangeCards[index]}
                    </React.Fragment>
                ))}
            </Container>
        </Container>
    )
}