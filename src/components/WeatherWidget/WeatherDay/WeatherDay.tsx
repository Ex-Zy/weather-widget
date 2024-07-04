import { Box, Stack, Typography } from '@mui/material'
import type React from 'react'

import type { ForecastDay } from '../../../types/common.ts'
import { dateToDayOfWeek } from '../../../utils/utils.ts'

interface Props {
  forecastday: ForecastDay
}

export const WeatherDay: React.FC<Props> = ({ forecastday }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: 'white', fontSize: 16 }}>
        {dateToDayOfWeek(forecastday.date)}
      </Typography>
      <img
        width={64}
        height={64}
        src={forecastday.day.condition.icon}
        alt={forecastday.day.condition.text}
        style={{ display: 'block', margin: 'auto' }}
      />
      <Typography variant="body1" sx={{ color: 'white', fontSize: 14 }}>
        {forecastday.day.condition.text}
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        <Typography variant="body1" sx={{ fontSize: 14, color: 'white' }}>
          {forecastday.day.maxtemp_c}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 14, color: 'white', mx: '4px' }}>
          |
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 14, color: 'white' }}>
          {forecastday.day.mintemp_c}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 14, color: 'white', ml: '2px' }}>
          &#176;C
        </Typography>
      </Stack>
    </Box>
  )
}
