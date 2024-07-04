export const WEATHER_DEFAULT_DATA = {
  location: {
    name: 'Kyiv',
    region: "Kyyivs'ka Oblast'",
    country: 'Ukraine',
    lat: 50.43,
    lon: 30.52,
    tz_id: 'Europe/Kiev',
    localtime_epoch: 1720018158,
    localtime: '2024-07-03 17:49',
  },
  current: {
    last_updated: '2024-07-03 17:45',
    temp_c: 26.8,
    is_day: 1,
    condition: {
      text: 'Partly Cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    },
    precip_mm: 0,
    humidity: 54,
    feelslike_c: 27.6,
    windchill_c: 26.8,
    uv: 7,
  },
  forecast: {
    forecastday: [
      {
        date: '2024-07-03',
        day: {
          maxtemp_c: 31.3,
          mintemp_c: 19.9,
          condition: {
            text: 'Patchy rain nearby',
            icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
          },
        },
      },
      {
        date: '2024-07-04',
        day: {
          maxtemp_c: 32.5,
          mintemp_c: 18.3,
          condition: {
            text: 'Patchy rain nearby',
            icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
          },
        },
      },
      {
        date: '2024-07-05',
        day: {
          maxtemp_c: 25.7,
          mintemp_c: 15.3,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
      },
      {
        date: '2024-07-06',
        day: {
          maxtemp_c: 26.1,
          mintemp_c: 15.2,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
      },
      {
        date: '2024-07-07',
        day: {
          maxtemp_c: 28.2,
          mintemp_c: 16.6,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
      },
      {
        date: '2024-07-08',
        day: {
          maxtemp_c: 31.4,
          mintemp_c: 18.2,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
      },
      {
        date: '2024-07-09',
        day: {
          maxtemp_c: 26.1,
          mintemp_c: 18.6,
          condition: {
            text: 'Partly Cloudy ',
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          },
        },
      },
    ],
  },
}
