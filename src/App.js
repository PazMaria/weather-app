import React, { Component } from 'react'
import './App.css';
import Cities from './components/Cities'
import TodayWeather from './components/TodayWeather';
import WeekWeather from './components/WeekWeather';

export class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='cities'>
        <Cities/>
        </div>
        <div className='weatherContainer'>
          <div className='today'>
        <TodayWeather/>
          </div>
          <div className='forecast'>
        <WeekWeather/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
