import { Container } from '@mui/material'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Fallback } from './components/Fallback.tsx'
import { Loader } from './components/Loader.tsx'

const WeatherWidget = lazy(() =>
  import('./components/WeatherWidget/WeatherWidget.tsx').then((module) => ({ default: module.WeatherWidget }))
)

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Suspense fallback={<Loader />}>
          <WeatherWidget />
        </Suspense>
      </Container>
    </ErrorBoundary>
  )
}

export default App
