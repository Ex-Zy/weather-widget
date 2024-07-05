import { Alert, Container } from '@mui/material'
import type React from 'react'

export const Fallback: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Alert variant="filled" severity="error">
        <span>Something went wrong: {error.message}</span>
      </Alert>
    </Container>
  )
}
