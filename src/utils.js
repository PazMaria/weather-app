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