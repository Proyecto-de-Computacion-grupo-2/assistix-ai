import ReactEcharts from 'echarts-for-react';
import { Container } from "react-bootstrap";
import {Game} from "../../../models/game.ts";

interface GamesProps {
    streak: Game[];
}

export default function ParlimentDonut({streak}: GamesProps) {

    const sum = streak.length >= 3 ? streak[0].mixed + streak[1].mixed + streak[2].mixed : 0;

    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
        },
        series: [
            {
                name: 'Puntos',
                type: 'pie',
                radius: ['60%', '95%'],
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 360,
                data: streak.length >= 3 ? [
                    {value: Math.abs(streak[2].mixed), name: 'J' + streak[2].game_week, itemStyle: {color: streak[2].mixed < 0 ? 'red' : '#349FB5'}},
                    {value: Math.abs(streak[1].mixed), name: 'J' + streak[1].game_week, itemStyle: {color: streak[1].mixed < 0 ? 'red' : '#19CAD8'}},
                    {value: Math.abs(streak[0].mixed), name: 'J' + streak[0].game_week, itemStyle: {color: streak[0].mixed < 0 ? 'red' : '#16EDC1'}}
                ] : [],
            }
        ],
        graphic: [
            {
                type: 'text',
                left: 'center',
                bottom: '32%',
                style: {
                    text: sum,
                    textAlign: 'center',
                    fill: '#000',
                    fontSize: 60,
                    fontWeight: 'bold',
                },
            },
            {
                type: 'text',
                left: 'center',
                bottom: '27%',
                style: {
                    text: 'Puntos totales',
                    textAlign: 'center',
                    fill: '#000',
                    fontSize: 16,
                    fontWeight: 'normal',
                },
            },
        ],
    };


    return (
        <Container className="p-2 m-0" style={{ maxHeight: "40vh" }} fluid>
            <p className="fw-bold text-secondary">Racha jornadas</p>
            <ReactEcharts
                option={option}
                style={{ height: '350px', width: '100%' }}
                className={'react_for_echarts position-relative pb-5'}
            />
        </Container>
    );
}