import type { IpLocation, Location, WeatherResponse } from '../types/common.ts'

const normalizeQuery = (query: Location | string) => {
  if (typeof query === 'string') {
    return query
  }

  return `${query.lat.toString()},${query.lon.toString()}`
}

const getWeatherUrl = (query: Location | string) => {
  const { VITE_WEATHER_API, VITE_WEATHER_API_KEY, VITE_WEATHER_API_PATH } = import.meta.env
  const searchParams = new URLSearchParams({
    q: normalizeQuery(query),
    key: VITE_WEATHER_API_KEY,
    aqi: 'no',
    days: '6',
  })

  return `${VITE_WEATHER_API}/${VITE_WEATHER_API_PATH}?${searchParams.toString()}`
}

export const fetchIPLocation = async (): Promise<Location> => {
  const response = await fetch(import.meta.env.VITE_IP_API)

  if (!response.ok) {
    throw new Error('Failed to fetch IP location')
  }

  const data = (await response.json()) as IpLocation

  return {
    lat: data.latitude,
    lon: data.longitude,
  }
}

interface FetchWeatherParams {
  query: Location | string
}

export const fetchWeatherForecast = async ({ query }: FetchWeatherParams): Promise<WeatherResponse> => {
  const response = await fetch(getWeatherUrl(query))

  if (!response.ok) {
    throw new Error('Failed to fetch weather forecast')
  }

  return (await response.json()) as WeatherResponse
}
