import { QiitaItem } from '@/api/QiitaApi'

type Props = {
  item: QiitaItem
}

export default function QiitaItemDetail({ item }: Props) {
  return (
    <div>
      <h1>{item.title}</h1>
      <a href={item.url}>Read more</a>
      <p>Last updated: {item.updated_at}</p>
    </div>
  )
}
