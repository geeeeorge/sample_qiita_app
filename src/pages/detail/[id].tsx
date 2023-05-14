import { QiitaItem, getQiitaItemByID } from '../../api/QiitaApi'
import QiitaItemDetail from '../../pages/QiitaItemDetail'

type Props = {
  item: QiitaItem
}

export default function Detail({ item }: Props) {
  return (
    <>
      <QiitaItemDetail item={item} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const item = await getQiitaItemByID(params.id)
  return {
    props: {
      item,
    },
  }
}
