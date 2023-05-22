import { ApiKeyProvider } from '@/pages/index'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiKeyProvider>
     <Component {...pageProps} />
    </ApiKeyProvider>
  )
}
