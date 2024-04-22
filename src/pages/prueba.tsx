import Layout from "../components/shared-components/layout/layout.tsx";
import { useParams } from "react-router-dom";



export default function Prueba() {

    const { id } = useParams();


    return (
        <Layout>
            <p>Player id: {id}</p>
        </Layout>
    )
}