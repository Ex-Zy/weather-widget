import { Alert, Button, Container } from '@mui/material'
import type React from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export const Fallback: React.FC<{ error: Error }> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary()
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Alert
        variant="filled"
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={resetBoundary}>
            try again
          </Button>
        }
      >
        <span>Something went wrong: {error.message}</span>
      </Alert>
    </Container>
  )
}
