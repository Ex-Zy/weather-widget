import { Card, Grid, Typography } from '@mui/material'
import type React from 'react'

import type { WeatherResponse } from '../../../types/common.ts'
import { formatDate } from '../../../utils/utils.ts'

interface Props {
  data: WeatherResponse
}

export const WeatherMediumScreen: React.FC<Props> = ({ data }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, color: (theme) => theme.palette.primary.main }}>
        {formatDate(data.location.localtime)}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          dsada
        </Grid>
        <Grid item xs={6} md={4}>
          dsada
        </Grid>
        <Grid item xs={6} md={4}>
          dsada
        </Grid>
        <Grid item xs={6} md={8}>
          dsada
        </Grid>
      </Grid>
    </Card>
  )
}
