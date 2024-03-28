import ReactEcharts from 'echarts-for-react';
import {Container} from "react-bootstrap";

const option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Puntos',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            data: [
                {value: 8, name: 'J22'},
                {value: 8, name: 'J23'},
                {value: 16, name: 'J24'}
            ],
            color: ['#349FB5', '#19CAD8', '#16EDC1'], // Example colors: Tomato, SteelBlue, LimeGreen
        }
    ]
};


export default function ParlimentDonut() {
    return (
        <Container className="p-2 m-0" style={{maxHeight: "30vh"}}>
            <strong className="text-secondary">Racha</strong>
            <ReactEcharts
                option={option}
                style={{height: '350px', width: '100%'}}
                className={'react_for_echarts position-relative pb-5'}
            />
        </Container>
    );
}