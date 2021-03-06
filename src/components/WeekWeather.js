import React, { Component } from 'react'
import { getDayOfWeek, getIcon } from '../utils'

export class WeekWeather extends Component {
    render() {
        const { forecast, error } = this.props
        return (
            <div className="forecastContainer">

                {!error ? forecast.map((item, index) => {
                    const classToUse = index === 0 ? 'forecast-dayCard left' : index === 3 ? 'forecast-dayCard right' : 'forecast-dayCard'
                    return (
                        <div className={classToUse} key={index}>
                            <div className="day">
                                {getDayOfWeek(item.description)}
                            </div>
                            <div className="image2">
                                {item.icon && getIcon(item.icon)}
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
