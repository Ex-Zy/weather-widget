import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import type React from 'react'

import { WeatherDay } from './WeatherDay.tsx'
import type { WeatherResponse } from '../../types/common.ts'

interface Props {
  data: WeatherResponse
}

export const WeatherMediumScreen: React.FC<Props> = ({ data }) => {
  return (
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
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3} sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              {data.location.country}, {data.location.name}
            </Typography>
            <Typography variant="body1" mt={1} sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              {data.current.temp_c}&#176;C
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              Feels {data.current.feelslike_c}&#176;C
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <CardMedia
              sx={{ width: 64, height: 64, margin: 'auto' }}
              image={data.current.condition.icon}
              title={data.current.condition.text}
            />
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              {data.current.condition.text}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Grid container spacing={2}>
              {(data.forecast.forecastday ?? []).slice(0, 2).map((day) => {
                return (
                  <Grid key={day.date} item xs={6}>
                    <WeatherDay forecastday={day} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
