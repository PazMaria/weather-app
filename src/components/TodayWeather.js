import React, { Component } from 'react'

export class TodayWeather extends Component {
    render() {
        const {temp, icon, description} = this.props.current
        return (
            temp && <div className="todayContainer">
                <div className="header">Today</div>

                 <div className="inner-container">
                    <div className="image">
                        {icon && <img className='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={'weather icon'} />}
                    </div>
                    <div className="current-weather">
                        <div className='degrees'>{temp}°</div>
                        <div>{description[0].toUpperCase() + description.slice(1).toLowerCase()}</div>
                    </div>
                </div>
             </div>
        )
    }
}

export default TodayWeather
