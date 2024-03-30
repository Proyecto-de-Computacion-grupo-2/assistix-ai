import { useEffect, useState } from "react";
import { ChartComponent } from "../../market-components/chart/chart.tsx";
import json from "./prueba.json";
import { Container } from "react-bootstrap";
import Ramanzani from "../../../assets/40090.png";


interface ChartData {
    time: string;
    value: number;
}

interface InputFormat {
    value: number;
    date: string;
}

function convertFormat(input: InputFormat[]): ChartData[] {
    return input.map(item => {
        const date = new Date(Date.parse(item.date.replace(/(\d+) (\w+)/, "$2 $1, ")));
        date.setHours(12); // Ajusta la hora a mediodía
        return {
            time: date.toISOString().split('T')[0],
            value: item.value
        };
    });
}

export default function PlayerGraph() {

    const [data, setData] = useState<ChartData[]>([]);
    const [marketPrice, setMarketPrice] = useState('0');
    const [variation, setVariation] = useState('0%');

    function processData() {
        const data = convertFormat(json.points as InputFormat[]);
        setData(data);
        setMarketPrice(`${(data[data.length - 1].value).toLocaleString('es-ES')} €`);
        setVariation(`${((data[data.length - 1].value - data[data.length - 2].value) / data[data.length - 2].value * 100).toFixed(2)}%`);
    }

    useEffect(() => {
        processData();
    }, []);

    return (
        <Container className='p-2 h-100 d-flex flex-column' fluid>
            <Container className='py-1 m-0 d-flex flex-row justify-content-between' fluid>
                <Container className='p-0 m-0 d-flex flex-column justify-content-between'>
                    <strong className='text-secondary'>Historial precios</strong>
                    <Container className='d-flex flex-column p-0 m-0'>
                        <p className='fs-5 bold text-secondary'>PRECIO ACTUAL</p>
                        <Container className='d-flex flex-row p-0 m-0 gap-1'>
                            <p className='fs-3 bold '>{marketPrice}</p>
                        </Container>
                    </Container>
                </Container>
                <Container className='p-0 m-0 d-flex flex-column align-items-end'>
                    <div
                        className="player-container rounded-4 bg-dark my-2 mx-3 d-flex justify-content-center align-items-center">
                        <img src={Ramanzani} alt="player" height={50} width={50} />
                    </div>
                    <p className='fs-5 bold me-4 text-success'>{variation}</p>
                </Container>
            </Container>
            <Container className='flex-grow-1 p-0 m-0' fluid>
                <ChartComponent data={data} />
            </Container>
        </Container>
    )
}
