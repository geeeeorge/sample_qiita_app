import type { NextPage } from 'next'
import * as React from 'react'
import QiitaItemList from '../pages/QiitaItemList'
import { createContext, useState, useContext, ReactNode } from 'react'

interface ApiKeyContextType {
  apiKey: string
  setApiKey: React.Dispatch<React.SetStateAction<string>>
}

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined)

interface ApiKeyProviderProps {
  children: ReactNode
}

export function ApiKeyProvider({ children }: ApiKeyProviderProps) {
  const [apiKey, setApiKey] = useState('')

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  )
}

export function useApiKey() {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within a ApiKeyProvider');
  }
  return context;
}


const Home: NextPage = () => {
  return (
    <>
      <QiitaItemList />
    </>
  )
}

export default Home
