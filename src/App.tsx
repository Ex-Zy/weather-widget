import { Container } from '@mui/material'
import { Suspense } from 'react'

import { WeatherWidget } from './components/WeatherWidget/WeatherWidget.tsx'
import { useIpBasedLocation } from './hooks/useIpBasedLocation.ts'

function App() {
  const { loading, error, location } = useIpBasedLocation()

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Suspense fallback={<p>Loading...</p>}>{!loading && !error && <WeatherWidget location={location} />}</Suspense>
    </Container>
  )
}

export default App
