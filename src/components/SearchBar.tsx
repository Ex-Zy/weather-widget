import { Box, TextField } from '@mui/material'
import type React from 'react'

interface Props extends React.ComponentProps<typeof TextField> {
  onSubmit: (e: React.FormEvent) => void
}

export const SearchBar: React.FC<Props> = ({ onSubmit, ...props }) => {
  return (
    <form onSubmit={onSubmit}>
      <Box component="section" sx={{ py: 2, justifyContent: 'center', display: 'flex' }}>
        <TextField {...props} />
      </Box>
    </form>
  )
}
