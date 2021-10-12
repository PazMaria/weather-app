import React, { Component } from 'react'
import { getIcon } from '../utils'

export class TodayWeather extends Component {
    render() {
        let { current: { temp, icon, description }, error } = this.props
        return (
            <div className="todayContainer">
                {!error ? <><div className="header">Today</div>

                <div className="inner-todayContainer">
                    <div className="image">
                        {icon && getIcon(icon)}
                    </div>

                    <div className="current-weather">
                        <div className='degrees'>{temp}°</div>
                        <div>{description && description[0].toUpperCase() + description.slice(1).toLowerCase()}</div>
                    </div>
                </div>
                </>
            :
            <div>
                <p style={{textAlign:'center'}}>Unable to retrieve data, try again later</p>
            </div>    
            }
            </div>
        )
    }
}

export default TodayWeather
