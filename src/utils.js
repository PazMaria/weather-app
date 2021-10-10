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

export const getDayOfWeek = number =>{
let day
    switch (number) {
        case 0:
            day = 'Monday'
            break
        case 1:
            day = 'Tuesday'
            break
        case 2:
            day = 'Wednesday'
            break
        case 3:
            day = 'Thursday'
            break
        case 4:
            day = 'Friday'
            break
        case 5:
            day = 'Saturday'
            break
        case 6:
            day = 'Sunday'
            break
        default:
            break
    }
    return day
}