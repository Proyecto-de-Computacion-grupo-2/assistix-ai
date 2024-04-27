import {useEffect, useState} from "react";
import {ChartComponent} from "../../market-components/chart/chart.tsx";
import {Container} from "react-bootstrap";
import {PriceVariation} from "../../../models/price-variation.ts";
import {PlayerIdInformation} from "../../../models/player.ts";
import {getPlayer} from "../../../services/player-service/player-service.ts";
import {getPriceVariation} from "../../../services/price-variation/price-variation-service.ts";

interface ChartData {
    time: string;
    value: number;
}

/*
function convertToChartData2(historic_values: PriceVariation[]): ChartData[] {
    console.log('HELLO',historic_values);
    return historic_values.map(item => {
        const date = new Date(item.price_day);
        return {
            value: item.price,
            time: date
        };
    });
}
*/

// AI SOLUTION, WILL DELETE THIS AND MAKE IT WORK LATER.
function convertToChartData3(historic_values: PriceVariation[]): ChartData[] {
    // Filter out items with duplicate price_day
    const filteredHistoricValues = historic_values.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.price_day === item.price_day
            ))
    );

    // Sort filteredHistoricValues by price_day in ascending order
    const sortedHistoricValues = [...filteredHistoricValues].sort((a, b) => {
        if (typeof a.price_day === 'string') {
            return new Date(a.price_day).getTime() - new Date(b.price_day).getTime();
        } else if (typeof a.price_day === 'number') {
            return a.price_day - b.price_day;
        }
    });

    return sortedHistoricValues.map(item => {
        let formattedDate;
        if (item.price_day) {
            if (typeof item.price_day === 'string') {
                formattedDate = item.price_day; // If price_day is already a string in "YYYY-MM-DD" format
            } else if (typeof item.price_day === 'number') {
                const date = new Date(item.price_day); // If price_day is a timestamp
                formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
            }
        } else {
            formattedDate = "1970-01-01"; // Default value if price_day is undefined
        }
        return {
            time: formattedDate,
            value: item.price
        };
    });
}

export default function PlayerGraph({player_id}: { player_id: number }) {
    const [data, setData] = useState<ChartData[]>([]);
    //const [marketPrice, setMarketPrice] = useState('0');
    //const [variation, setVariation] = useState('0%');
    const [playerData, setPlayerData] = useState<PlayerIdInformation>({} as PlayerIdInformation);
    const [priceData, setPriceData] = useState<PriceVariation[]>([{} as PriceVariation]);

    useEffect(() => {
        const playerId = Number(player_id);

        getPlayer(playerId)
            .then(player => {
                setPlayerData(player);
            })
            .catch(error => {
                console.error(error);
            });

        getPriceVariation(playerId)
            .then(priceVariation => {
                setPriceData(priceVariation);
                processData(priceVariation);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    function processData(priceData: PriceVariation[]) {
        const data = convertToChartData3(priceData);
        setData(data);
    }

    return (
        <Container className='p-2 h-100 d-flex flex-column' fluid>
            <Container className='py-1 m-0 d-flex flex-row justify-content-between' fluid>
                <Container className='p-0 m-0 d-flex flex-column justify-content-between'>
                    <strong className='text-secondary'>Historial precios</strong>
                    <Container className='d-flex flex-column p-0 m-0'>
                        <p className='fs-5 bold text-secondary'>PRECIO ACTUAL</p>
                        <Container className='d-flex flex-row p-0 m-0 gap-1'>
                            {/*<p className='fs-3 bold '>{marketPrice}</p>*/}
                        </Container>
                    </Container>
                </Container>
                <Container className='p-0 m-0 d-flex flex-column align-items-end'>
                    <div
                        className="player-container rounded-4 bg-dark my-2 mx-3 d-flex justify-content-center align-items-center">
                        <img src={playerData.photo_face} alt="player" height={50} width={50}/>
                    </div>
                    {/*<p className='fs-5 bold me-4 text-success'>{variation}</p>*/}
                </Container>
            </Container>
            <Container className='flex-grow-1 p-0 m-0' fluid>
                <ChartComponent data={data}/>
            </Container>
        </Container>
    )
}
