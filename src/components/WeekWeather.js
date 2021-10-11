import React, { Component } from 'react'
import { getDayOfWeek } from '../utils'

export class WeekWeather extends Component {
    render() {
        const { forecast, error } = this.props
        return (
            <div className="forecastContainer">

                {!error ? forecast.map((item, index) => {
                    return (
                        <div className="forecast-dayCard" key={index}>
                            <div className="day">
                                {getDayOfWeek(item.description)}
                            </div>
                            <div className="image2">
                                {item.icon && <img className='icon2' src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={'weather icon'} />}
                            </div>
                            <div className="degrees-small">
                                {item.temp}°
                            </div>
                        </div>
                    )
                    })
                    :
                    <div className='error'>
                        <p>Unable to retrieve data, try again later</p>
                    </div>
                }
            </div>
        )
    }
}

export default WeekWeather
