import clear from "../src/assets/icons/clear.png";
import clearnight from "../src/assets/icons/clearnight.png";
import partlysunny from "../src/assets/icons/partlysunny.png";
import partlycloudynight from "../src/assets/icons/partlycloudynight.png";
import scatteredclouds from "../src/assets/icons/scatteredclouds.png";
import cloudy from "../src/assets/icons/cloudy.png";
import showerrain from "../src/assets/icons/showerrain.png";
import rain from "../src/assets/icons/rain.png";
import rainnight from "../src/assets/icons/rainnight.png";
import thunderstorms02 from "../src/assets/icons/thunderstorms02.png";
import cloudysnow from "../src/assets/icons/cloudysnow.png";
import fog from "../src/assets/icons/fog.png";
import unknown from "../src/assets/icons/unknown.png";


export const getCoor = city => {
    let coor
    switch (city) {
        case 'VICTORIA':
            coor = {
                lat: 48.4284,
                lon: -123.3656
            }
            break
        case 'CALGARY':
            coor = {
                lat: 51.0447,
                lon: -114.0719
            }
            break
        case 'TORONTO':
            coor = {
                lat: 43.6532,
                lon: -79.3832
            }
            break
        default:
            break
    }
    return coor
}

export const getDayOfWeek = number => {
    let day
    switch (number) {
        case 0:
            day = 'Mon'
            break
        case 1:
            day = 'Tues'
            break
        case 2:
            day = 'Wed'
            break
        case 3:
            day = 'Thu'
            break
        case 4:
            day = 'Fri'
            break
        case 5:
            day = 'Sat'
            break
        case 6:
            day = 'Sun'
            break
        default:
            break
    }
    return day
}



export const getIcon = (code) => {
    console.log('icon', code)
    switch (code) {
        case '01d':
            return <img className="icon" src={clear} alt={'weather icon'} />;
        case '01n':
            return <img className="icon" src={clearnight} alt={'weather icon'} />;
        case '02d':
            return <img className="icon" src={partlysunny} alt={'weather icon'} />;
        case '02n':
            return <img className="icon" src={partlycloudynight} alt={'weather icon'} />;
        case '03d':
            return <img className="icon" src={scatteredclouds} alt={'weather icon'} />;
        case '03n':
            return <img className="icon" src={scatteredclouds} alt={'weather icon'} />;
        case '04d':
            return <img className="icon" src={cloudy} alt={'weather icon'} />;
        case '04n':
            return <img className="icon" src={cloudy} alt={'weather icon'} />;
        case '09d':
            return <img className="icon" src={showerrain} alt={'weather icon'} />;
        case '09n':
            return <img className="icon" src={showerrain} alt={'weather icon'} />;
        case '10d':
            return <img className="icon" src={rain} alt={'weather icon'} />;
        case '10n':
            return <img className="icon" src={rainnight} alt={'weather icon'} />;
        case '11d':
            return <img className="icon" src={thunderstorms02} alt={'weather icon'} />;
        case '11n':
            return <img className="icon" src={thunderstorms02} alt={'weather icon'} />;
        case '13d':
            return <img className="icon" src={cloudysnow} alt={'weather icon'} />;
        case '13n':
            return <img className="icon" src={cloudysnow} alt={'weather icon'} />;
        case '50d':
            return <img className="icon" src={fog} alt={'weather icon'} />;
        case '50n':
            return <img className="icon" src={fog} alt={'weather icon'} />;
        default:
            return <img className="icon" src={unknown} alt={'weather icon'} />;
    }
}