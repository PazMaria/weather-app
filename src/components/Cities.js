import React, { Component } from 'react'

export class Cities extends Component {
    state = {
    selectedCity:'VICTORIA'
}
    clickedButtonHandler = name => {
        const {getWeather} = this.props
        this.setState({selectedCity:name})
        getWeather(name)
    };

   buttons = ['VICTORIA', 'CALGARY', 'TORONTO']
    render() {
        const {selectedCity} = this.state
        return (
            <>
            {this.buttons.map((name, i)=>
                <button key={i} name={name} onClick={() => this.clickedButtonHandler(name)} className={selectedCity === name ? 'activeButton' : ''}>{name}
                </button>
            )
            }
            </>
        )
    }
}

export default Cities
