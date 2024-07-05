import type React from 'react'

import { WeatherLargeScreen } from './WeatherLargeScreen.tsx'
import { WeatherMediumScreen } from './WeatherMediumScreen.tsx'
import { WeatherSmallScreen } from './WeatherSmallScreen.tsx'
import { useBreakPoints } from '../../hooks/useBreakPoints.ts'
import { useInput } from '../../hooks/useInput.ts'
import { useWeatherForecast } from '../../hooks/useWeatherForecast.ts'
import type { Location } from '../../types/common.ts'
import { SearchBar } from '../SearchBar.tsx'

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

  if (error || loading) return <div>Loading...</div>

  return (
    <div className="widget">
      <SearchBar
        placeholder="Example: Kyiv or 50.1899,30.3141 or 176.98.23.132"
        variant="filled"
        label="Search by city, location, ip adress"
        type="search"
        value={value}
        onChange={onChange}
        onSubmit={handleSearch}
      />
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
