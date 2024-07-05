import { Card } from '@mui/material'
import type React from 'react'
import { lazy } from 'react'

import { useBreakPoints } from '../../hooks/useBreakPoints.ts'
import { useInput } from '../../hooks/useInput.ts'
import { useWeatherForecast } from '../../hooks/useWeatherForecast.ts'
import type { Location } from '../../types/common.ts'
import { Loader } from '../Loader.tsx'

const SearchBar = lazy(() => import('../SearchBar.tsx').then((module) => ({ default: module.SearchBar })))
const WeatherLargeScreen = lazy(() =>
  import('./WeatherLargeScreen.tsx').then((module) => ({ default: module.WeatherLargeScreen }))
)
const WeatherMediumScreen = lazy(() =>
  import('./WeatherMediumScreen.tsx').then((module) => ({ default: module.WeatherMediumScreen }))
)
const WeatherSmallScreen = lazy(() =>
  import('./WeatherSmallScreen.tsx').then((module) => ({ default: module.WeatherSmallScreen }))
)

interface Props {
  location: Location
}

export const WeatherWidget: React.FC<Props> = ({ location }) => {
  const { loading, error, data, refetch } = useWeatherForecast(location)

  const { value, onChange } = useInput('')
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    void refetch(location, value)
  }

  const { isLargeScreen, isMediumScreen } = useBreakPoints()

  if (error || loading) return <Loader />

  return (
    <div className="widget">
      <SearchBar
        sx={{ minWidth: 300 }}
        placeholder="Example: Kyiv or 50.1899,30.3141 or 176.98.23.132"
        variant="standard"
        label="Search by city, location, ip adress"
        type="search"
        value={value}
        onChange={onChange}
        onSubmit={handleSearch}
      />
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
          borderRadius: 6,
          boxShadow: 3,
          py: 1,
        }}
      >
        {isLargeScreen ? (
          <WeatherLargeScreen data={data} />
        ) : isMediumScreen ? (
          <WeatherMediumScreen data={data} />
        ) : (
          <WeatherSmallScreen data={data} />
        )}
      </Card>
    </div>
  )
}
