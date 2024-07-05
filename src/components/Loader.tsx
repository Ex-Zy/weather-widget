import { Alert, Container } from '@mui/material'

export const Loader = () => {
  return (
    <Container maxWidth="xs" sx={{ py: 3 }}>
      <Alert severity="info">Loading...</Alert>
    </Container>
  )
}
