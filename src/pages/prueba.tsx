import Layout from "../components/shared-components/layout/layout.tsx";
import {useEffect, useState} from "react";
import {Player} from "../models/player.ts";
import getPlayer from "../services/player-service/player-service.ts";


export default function Prueba() {

    const [player, setPlayer] = useState<Player>();

    useEffect(() => {
        getPlayer(5)
            .then(player => {
                setPlayer(player)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return (
        <Layout>
            <p>{player?.name || "Loading..."}</p>
        </Layout>
    )
}