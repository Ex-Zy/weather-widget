import './WeatherWidget.scss'
import type React from 'react'

import { WeatherLargeScreen } from './WeatherLargeScreen/WeatherLargeScreen.tsx'
import { WeatherMediumScreen } from './WeatherMediumScreen/WeatherMediumScreen.tsx'
import { useWeatherForecast } from '../../hooks/useWeatherForecast.ts'
import type { Location } from '../../types/common.ts'

interface Props {
  location: Location
  search?: string
}

export const WeatherWidget: React.FC<Props> = ({ location, search }) => {
  const { loading, error, data } = useWeatherForecast(location, search)

  if (error || loading) return <div>Loading...</div>

  return (
    <div className="widget">
      <WeatherLargeScreen data={data} />
      {/*<WeatherMediumScreen data={data} />*/}
    </div>
  )
}
