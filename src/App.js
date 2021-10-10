import React, { Component } from 'react'
import './App.css';
import Cities from './components/Cities'
import TodayWeather from './components/TodayWeather';
import WeekWeather from './components/WeekWeather';

const weatherKey=process.env.REACT_APP_WEATHER_API_KEY

export class App extends Component {

  state={
    current:{temp:'', icon:null, description:''},
    day2:{temp:'', icon:null, description:''},
    day3:{temp:'', icon:null, description:''},
    day4:{temp:'', icon:null, description:''},
    day5:{temp:'', icon:null, description:''},
  }

  getCoor = city =>{
    let coor
    switch (city) {
      case 'VICTORIA':
        coor={lat: 48.4284,
        lon: -123.3656}
        break
    case 'CALGARY':
        coor={lat:51.0447,
        lon:-114.0719}
        break
    case 'TORONTO':
        coor={lat: 43.6532,
        lon: -79.3832}
        break
    default:
        break
    }
    return coor
  }
  
  getWeather = async city=>{
    const coor = this.getCoor(city)
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coor.lat}&lon=${coor.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${weatherKey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({current:{
    temp:Math.floor(data.current.temp),
    icon:data.current.weather[0].icon,
    description: data.current.weather[0].description
}})
}

componentDidMount(){
  this.getWeather('VICTORIA')
}

  render() {
    const {current} =this.state
    return (
      <div className='mainContainer'>
        <div className='cities'>
          <Cities getWeather={this.getWeather}/>
        </div>
        <div className='weatherContainer'>
          <TodayWeather current={current}/>
          <WeekWeather/>
        </div>
      </div>
    )
  }
}

export default App
