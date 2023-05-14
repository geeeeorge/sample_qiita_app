import { GridRowsProp } from '@mui/x-data-grid'
import type { NextPage } from 'next'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getQiitaItems, QiitaItems } from '../api/QiitaApi'
import SearchAppBar from '../components/AppBar'
import QiitaItemsGrid from '../components/QiitaItemsGrid'

const Home: NextPage = () => {
  const [resRows, setResRows] = useState<QiitaItems>([])

  useEffect(() => {
    getQiitaItems(setResRows)
  }, [])
  const rows: GridRowsProp = resRows

  return (
    <>
      <SearchAppBar />
      <QiitaItemsGrid rows={rows} />
    </>
  )
}

export default Home
