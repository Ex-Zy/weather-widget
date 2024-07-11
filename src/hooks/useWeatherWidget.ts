import { useQuery } from '@tanstack/react-query'

import { fetchIPLocation, fetchWeatherForecast } from '../services/weather.ts'
import type { Location } from '../types/common.ts'
import { LOCATION_DEFAULT_DATA } from '../utils/constants.ts'

const normalizeWeatherQuery = (query: Location | string) => {
  if (typeof query === 'string') {
    return query
  }

  return `${query.lat.toString()},${query.lon.toString()}`
}

interface UseWeatherWidgetParams {
  query: Location | string
}

export const useWeatherWidget = ({ query }: UseWeatherWidgetParams) => {
  const ipQuery = useQuery({
    queryKey: ['location'],
    queryFn: fetchIPLocation,
  })

  const normalizedQuery = normalizeWeatherQuery(query)

  return useQuery({
    queryKey: ['weather', normalizedQuery, ipQuery.data],
    queryFn: () => fetchWeatherForecast({ query: normalizedQuery || (ipQuery.data ?? LOCATION_DEFAULT_DATA) }),
    enabled: !!normalizedQuery || !!ipQuery.data,
    throwOnError: true,
  })
}
