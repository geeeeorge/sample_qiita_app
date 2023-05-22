import { ApiKeyProvider } from '@/pages/index'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
  },
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    < ThemeProvider theme={theme}>
      <ApiKeyProvider>
        <Component {...pageProps} />
      </ApiKeyProvider>
    </ThemeProvider>
  )
}
