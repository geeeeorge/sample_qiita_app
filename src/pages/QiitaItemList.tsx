import { GridRowsProp } from '@mui/x-data-grid'
import type { NextPage } from 'next'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getQiitaItems, QiitaItems } from '@/api/QiitaApi'
import SearchAppBar from '@/components/AppBar'
import QiitaItemsGrid from '@/components/QiitaItemsGrid'
import { useApiKey } from '@/pages/index'

const QiitaItemList: NextPage = () => {
  const [resRows, setResRows] = useState<QiitaItems>([])
  const { apiKey, setApiKey } = useApiKey()

  useEffect(() => {
    getQiitaItems(setResRows, apiKey, '')
  }, [apiKey])
  const rows: GridRowsProp = resRows

  return (
    <>
      <SearchAppBar setApiKey={setApiKey} />
      <QiitaItemsGrid rows={rows} />
    </>
  )
}

export default QiitaItemList
