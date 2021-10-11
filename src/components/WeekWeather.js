import React, { Component } from 'react'
import { getDayOfWeek } from '../utils'

export class WeekWeather extends Component {
    render() {
        const { forecast } = this.props
        return (
            forecast && <div className="forecastContainer">

                {forecast.map((item, index) => {
                    return (
                        <div className="forecast-dayCard" key={index}>
                            <div className="day">
                                {getDayOfWeek(item.description)}
                            </div>
                            <div className="image2"><img className='icon2' src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={'weather icon'} />
                            </div>
                            <div className="degrees-small">
                                {item.temp}°
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default WeekWeather
