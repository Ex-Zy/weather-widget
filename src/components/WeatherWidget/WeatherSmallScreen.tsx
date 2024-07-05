import { CardContent, CardMedia, Grid, Typography } from '@mui/material'
import type React from 'react'

import type { WeatherResponse } from '../../types/common.ts'

interface Props {
  data: WeatherResponse
}

export const WeatherSmallScreen: React.FC<Props> = ({ data }) => {
  return (
    <>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              {data.location.country}, {data.location.name}
            </Typography>
            <Typography variant="body1" mt={1} sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              {data.current.temp_c}&#176;C
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              Feels {data.current.feelslike_c}&#176;C
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <CardMedia
              sx={{ width: 64, height: 64, margin: 'auto' }}
              image={data.current.condition.icon}
              title={data.current.condition.text}
            />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              {data.current.condition.text}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}
