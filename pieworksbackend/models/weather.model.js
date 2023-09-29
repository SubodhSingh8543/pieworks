const mongoose = require('mongoose');

const WeatherDataSchema = new mongoose.Schema({
    coord: {
        lon: Number,
        lat: Number
    },
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String
    }],
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number
    },
    visibility: Number,
    wind: {
        speed: Number,
        deg: Number,
        gust: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,
    sys: {
        country: String,
        sunrise: Number,
        sunset: Number
    },
    timezone: Number,
    name: String,
    cod: Number
}, {
    versionKey: false
});

const Weather = mongoose.model('WeatherData', WeatherDataSchema);

module.exports = {Weather};
