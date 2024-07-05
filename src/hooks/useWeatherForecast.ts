import { useCallback, useEffect, useState } from 'react'

import type { Location, WeatherResponse } from '../types/common.ts'
import { WEATHER_DEFAULT_DATA } from '../utils/constants.ts'

const getWeatherUrl = (location: Location, search?: string) => {
  const { VITE_WEATHER_API, VITE_WEATHER_API_KEY, VITE_WEATHER_API_PATH } = import.meta.env
  const locationString = `${location.lat.toString()},${location.lon.toString()}`
  const searchParams = new URLSearchParams({
    q: search || locationString,
    key: VITE_WEATHER_API_KEY,
    aqi: 'no',
    days: '6',
  })

  return `${VITE_WEATHER_API}/${VITE_WEATHER_API_PATH}?${searchParams.toString()}`
}

export const useWeatherForecast = (location: Location) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<WeatherResponse>(WEATHER_DEFAULT_DATA)

  const fetchWeatherForecast = useCallback(async (location: Location, search?: string) => {
    try {
      const response = await fetch(getWeatherUrl(location, search))
      const data = (await response.json()) as WeatherResponse

      setData(data)
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchWeatherForecast(location)
  }, [fetchWeatherForecast, location])

  return { loading, error, data, refetch: fetchWeatherForecast }
}
