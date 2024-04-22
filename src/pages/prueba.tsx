import Layout from "../components/shared-components/layout/layout.tsx";
import {useEffect, useState} from "react";
import {Player} from "../models/player.ts";
import getPlayer from "../services/player-service/player-service.ts";
import {Container} from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function Prueba() {

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
        <Layout>
            <Container className='bg-white'>
                <p>Name: {player?.full_name}</p>
                <p>User Name: {player?.id_mundo_deportivo}</p>
            </Container>
        </Layout>
    )
}