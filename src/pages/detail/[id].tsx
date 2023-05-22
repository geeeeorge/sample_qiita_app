import { GetServerSidePropsContext } from 'next'
import React, { useEffect, useState } from 'react'
import { QiitaItem, getQiitaItemByID } from '@/api/QiitaApi'
import SearchAppBar from '@/components/AppBar'
import { useApiKey } from '@/pages'
import QiitaItemDetail from '@/pages/QiitaItemDetail'

type Props = {
  id: string
}

export default function Detail({ id }: Props) {
  const [resRow, setResRow] = useState({} as QiitaItem)
  const { apiKey, setApiKey } = useApiKey()

  useEffect(() => {
    getQiitaItemByID(setResRow, id, apiKey)
  }, [id, apiKey])

  return (
    <>
      <SearchAppBar setApiKey={setApiKey} />
      <QiitaItemDetail item={resRow} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id as string

  return {
    props: {
      id,
    },
  }
}
