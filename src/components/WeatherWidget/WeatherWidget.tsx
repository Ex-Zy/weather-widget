import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type React from 'react'

import { WeatherLargeScreen } from './WeatherLargeScreen.tsx'
import { WeatherMediumScreen } from './WeatherMediumScreen.tsx'
import { WeatherSmallScreen } from './WeatherSmallScreen.tsx'
import { useWeatherForecast } from '../../hooks/useWeatherForecast.ts'
import type { Location } from '../../types/common.ts'

interface Props {
  location: Location
  search?: string
}

export const WeatherWidget: React.FC<Props> = ({ location, search }) => {
  const { loading, error, data } = useWeatherForecast(location, search)

  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('sm'))

  if (error || loading) return <div>Loading...</div>

  return (
    <div className="widget">
      {isLargeScreen ? (
        <WeatherLargeScreen data={data} />
      ) : isMediumScreen ? (
        <WeatherMediumScreen data={data} />
      ) : (
        <WeatherSmallScreen data={data} />
      )}
    </div>
  )
}
