import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import { blue, blueGrey, orange } from '@mui/material/colors'
import type React from 'react'

import type { WeatherResponse } from '../../../types/common.ts'
import { formatDate } from '../../../utils/utils.ts'
import { WeatherDay } from '../WeatherDay/WeatherDay.tsx'

interface Props {
  data: WeatherResponse
}

export const WeatherLargeScreen: React.FC<Props> = ({ data }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0099FF',
        borderRadius: 6,
        boxShadow: 3,
      }}
    >
      <CardHeader
        title={formatDate(data.location.localtime)}
        sx={{ textAlign: 'center', color: 'white' }}
        titleTypographyProps={{ fontWeight: 900, fontSize: 26 }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
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
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <CardMedia
              sx={{ width: 64, height: 64, margin: 'auto' }}
              image={data.current.condition.icon}
              title={data.current.condition.text}
            />
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>
              {data.current.condition.text}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'right' }}>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              Precip: {data.current.precip_mm} mm
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              Chill: {data.current.windchill_c} &#176;C
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              UV: {data.current.uv}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
              Humidity: {data.current.humidity} %
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ mt: 1, pb: 2 }}>
        <Grid container spacing={2}>
          {data.forecast.forecastday?.map((day) => {
            return (
              <Grid key={day.date} item xs={2}>
                <WeatherDay forecastday={day} />
              </Grid>
            )
          })}
        </Grid>
      </CardActions>
    </Card>
  )
}
