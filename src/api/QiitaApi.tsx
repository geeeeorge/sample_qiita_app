import axios from 'axios'
import { QIITA_ITEMS_URL } from '../components/constants/consntants'

export type QiitaItem = {
  id: number
  title: string
  url: string
  updated_at: string
}

export const createQiitaItem = (
  id: number,
  title: string,
  url: string,
  updated_at: string,
): QiitaItem => {
  return {
    id: id,
    title: title,
    url: url,
    updated_at: updated_at,
  }
}

export type QiitaItems = QiitaItem[]

export function getQiitaItems(setResRows: (rows: QiitaItems) => void) {
  axios
    .get(QIITA_ITEMS_URL, {})
    .then((res) => {
      return JSON.parse(JSON.stringify(res.data))
    })
    .then((res) => {
      const resRows = res.map((item: any) =>
        createQiitaItem(
          item.id,
          item.title,
          item.url,
          item.updated_at.substr(0, 19).replace('T', ' '),
        ),
      )
      setResRows(resRows)
    })
}
