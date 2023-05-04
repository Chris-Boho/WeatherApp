import { Card } from 'semantic-ui-react'
import { DateTime } from 'luxon';

export function Weather({ weatherData }) {

    const dt = DateTime.now();

    return (
        <Card>
            <Card.Content>
                <Card.Header className='header'> City Name: {weatherData.name}</Card.Header>
                <div>
                    <p>Temperature: {Math.round(((weatherData.main.temp * 9 / 5) + 32).toFixed(2))} F</p>
                    <p>Humidity: {weatherData.main.humidity}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <img src={`${import.meta.env.VITE_REACT_APP_ICON_URL}${weatherData.weather[0].icon}.png`} />
                    <p>Date: {dt.toLocaleString()}</p>
                    <p>Day: {dt.toFormat('cccc')}</p>

                </div>
            </Card.Content>
        </Card>
    )
}