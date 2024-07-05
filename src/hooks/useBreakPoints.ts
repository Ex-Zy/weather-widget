import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const useBreakPoints = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return {
    isLargeScreen,
    isMediumScreen,
  }
}
