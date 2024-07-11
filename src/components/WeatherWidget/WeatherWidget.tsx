import { Card } from '@mui/material'
import { lazy } from 'react'

import { useBreakPoints } from '../../hooks/useBreakPoints.ts'
import { useSearch } from '../../hooks/useSearch.ts'
import { useWeatherWidget } from '../../hooks/useWeatherWidget.ts'
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

export const WeatherWidget = () => {
  const { value, tempValue, onChange, onSubmit } = useSearch('')
  const { data, isLoading } = useWeatherWidget({ query: tempValue })

  const { isLargeScreen, isMediumScreen } = useBreakPoints()

  if (isLoading || !data) {
    return <Loader />
  }

  return (
    <div className="widget">
      <SearchBar
        sx={{ minWidth: 300 }}
        placeholder="Example: Kyiv or 50.1899,30.3141 or 176.98.23.132"
        variant="standard"
        label="Search by city, location, ip adress"
        type="search"
        name="search"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
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
