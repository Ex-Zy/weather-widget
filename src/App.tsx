import { Container } from '@mui/material'
import { Suspense, lazy, useEffect, useState } from 'react'

import { useIpBasedLocation } from './hooks/useIpBasedLocation.ts'

const WeatherWidget = lazy(() =>
  import('./components/WeatherWidget/WeatherWidget.tsx').then((module) => ({ default: module.WeatherWidget }))
)

function App() {
  const { loading, error, location } = useIpBasedLocation()

  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    if (!loading && !error) {
      setShowWidget(true)
    }
  }, [loading, error])

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Suspense fallback={<p>Loading...</p>}>{showWidget && <WeatherWidget location={location} />}</Suspense>
    </Container>
  )
}

export default App
