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
                {value: 8, name: '22'},
                {value: 8, name: '23'},
                {value: 16, name: '24'}
            ],
            color: ['#349FB5', '#19CAD8', '#16EDC1'], // Example colors: Tomato, SteelBlue, LimeGreen
        }
    ],
    graphic: { // Using the graphic option to add custom elements
        type: 'text',
        left: 'center', // Position horizontally in the center
        bottom: '30%', // Position vertically in the center
        style: {
            text: 32, // Displaying the total as text
            textAlign: 'center',
            fill: '#000', // Text color
            fontSize: 40,
            fontWeight: 'bold',
        }
    }
};


export default function ParlimentDonut() {
    return (
        <Container className="p-2 m-0" style={{maxHeight: "30vh"}}>
            <p className="fw-bold text-secondary">Racha jornadas</p>
            <ReactEcharts
                option={option}
                style={{height: '350px', width: '100%'}}
                className={'react_for_echarts position-relative pb-5'}
            />
        </Container>
    );
}