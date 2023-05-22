import axios from 'axios'
import { QIITA_ITEMS_URL } from '@/components/constants/consntants'

export type QiitaItem = {
  id: number
  user_name: string
  body: string
  title: string
  url: string
  updated_at: string
}

export const createQiitaItem = (
  id: number,
  user_name: string,
  body: string,
  title: string,
  url: string,
  updated_at: string,
): QiitaItem => {
  return {
    id: id,
    user_name: user_name,
    body: body,
    title: title,
    url: url,
    updated_at: updated_at,
  }
}

export type QiitaItems = QiitaItem[]

export function getQiitaItems(
  setResRows: (rows: QiitaItems) => void,
  token: string,
  query: string,
): void {
  axios
    .get(QIITA_ITEMS_URL, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
      params: query ? { page: 1, per_page: 20, query: query } : { page: 1, per_page: 20 },
    })
    .then((res) => {
      return JSON.parse(JSON.stringify(res.data))
    })
    .then((res) => {
      const resRows = res.map((item: any) =>
        createQiitaItem(
          item.id,
          item.user.name,
          item.body,
          item.title,
          item.url,
          item.updated_at.substr(0, 19).replace('T', ' '),
        ),
      )
      setResRows(resRows)
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getQiitaItemByID(
  setResRow: (row: QiitaItem) => void,
  id: string,
  token: string,
): void {
  axios
    .get(`${QIITA_ITEMS_URL}/${id}`, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    })
    .then((res) => {
      const item = res.data
      const resRow = createQiitaItem(
        item.id,
        item.user.name,
        item.body,
        item.title,
        item.url,
        item.updated_at.substr(0, 19).replace('T', ' '),
      )
      setResRow(resRow)
    })
    .catch((err) => {
      console.log(id)
      console.log(token)
      console.log(err)
    })
}
