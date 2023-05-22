import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { ApiKeyProvider } from '@/pages/index'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApiKeyProvider>
        <Component {...pageProps} />
      </ApiKeyProvider>
    </ThemeProvider>
  )
}
