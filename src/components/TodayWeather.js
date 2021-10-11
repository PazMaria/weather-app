import React, { Component } from 'react'

export class TodayWeather extends Component {
    render() {
        const { temp, icon, description } = this.props.current
        return (
            <div className="todayContainer">
                {temp && <><div className="header">Today</div>

                <div className="inner-todayContainer">
                    <div className="image">
                        {icon && <img className='icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={'weather icon'} />}
                    </div>

                    <div className="current-weather">
                        <div className='degrees'>{temp}°</div>
                        <div>{description[0].toUpperCase() + description.slice(1).toLowerCase()}</div>
                    </div>
                </div>
                </>}
            </div>
        )
    }
}

export default TodayWeather
