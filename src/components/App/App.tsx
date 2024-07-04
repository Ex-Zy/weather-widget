import './App.scss'
import { Container } from '@mui/material'
import { Suspense } from 'react'

import { useIpBasedLocation } from '../../hooks/useIpBasedLocation.ts'
import { WeatherWidget } from '../WeatherWidget/WeatherWidget.tsx'

function App() {
  const { loading, error, location } = useIpBasedLocation()

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Suspense fallback={<p>Loading...</p>}>
        <WeatherWidget location={location} search="Kyiv" />
      </Suspense>
    </Container>
  )
}

export default App
