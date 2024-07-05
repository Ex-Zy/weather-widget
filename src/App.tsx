import { Container } from '@mui/material'
import { Suspense, lazy, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Fallback } from './components/Fallback.tsx'
import { Loader } from './components/Loader.tsx'
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
    <ErrorBoundary FallbackComponent={Fallback}>
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Suspense fallback={<Loader />}>{showWidget && <WeatherWidget location={location} />}</Suspense>
      </Container>
    </ErrorBoundary>
  )
}

export default App
