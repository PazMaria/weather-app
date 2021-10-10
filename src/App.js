import React, { Component } from 'react'
import './App.css';
import Cities from './components/Cities'
import TodayWeather from './components/TodayWeather';
import WeekWeather from './components/WeekWeather';
import {getCoor} from './utils'

const weatherKey=process.env.REACT_APP_WEATHER_API_KEY

export class App extends Component {

  state={
    current:{temp:'', icon:null, description:''},
    forecast:[]
  }
  
  getWeather = async city=>{
    const coor = getCoor(city)
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coor.lat}&lon=${coor.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${weatherKey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const forecast = data.daily.slice(1, 5).map((element,i) => {
      return {
        temp: Math.floor(element.temp.max), icon: element.weather[0].icon, description: (new Date(element.dt * 1000)).getDay()
        
      }
    })

    this.setState({
      current:{
        temp:Math.floor(data.current.temp),
        icon:data.current.weather[0].icon,
        description: data.current.weather[0].description
      },
      forecast
})
}

componentDidMount(){
  this.getWeather('VICTORIA')
}

  render() {
    const {current, forecast} =this.state
    return (
      <div className='mainContainer'>
        <div className='cities'>
          <Cities getWeather={this.getWeather}/>
        </div>
        <div className='weatherContainer'>
          <TodayWeather current={current}/>
          <WeekWeather forecast={forecast} />
        </div>
      </div>
    )
  }
}

export default App
