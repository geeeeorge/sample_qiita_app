import axios from 'axios'
import { QIITA_ITEMS_URL } from '@/components/constants/consntants'

export type QiitaItem = {
  id: number
  body: string
  title: string
  url: string
  updated_at: string
}

export const createQiitaItem = (
  id: number,
  body: string,
  title: string,
  url: string,
  updated_at: string,
): QiitaItem => {
  return {
    id: id,
    body: body,
    title: title,
    url: url,
    updated_at: updated_at,
  }
}

export type QiitaItems = QiitaItem[]

export function getQiitaItems(setResRows: (rows: QiitaItems) => void, query: string): void {
  axios
    .get(QIITA_ITEMS_URL, {
      params: query ? { page: 1, per_page: 20, query: query } : { page: 1, per_page: 20 },
    })
    .then((res) => {
      return JSON.parse(JSON.stringify(res.data))
    })
    .then((res) => {
      const resRows = res.map((item: any) =>
        createQiitaItem(
          item.id,
          item.body,
          item.title,
          item.url,
          item.updated_at.substr(0, 19).replace('T', ' '),
        ),
      )
      setResRows(resRows)
    })
}

export function getQiitaItemByID(id: string): Promise<QiitaItem> {
  return axios.get(`${QIITA_ITEMS_URL}/${id}`).then((res) => {
    const item = res.data
    return createQiitaItem(
      item.id,
      item.body,
      item.title,
      item.url,
      item.updated_at.substr(0, 19).replace('T', ' '),
    )
  })
}
