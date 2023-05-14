import { GetServerSidePropsContext } from 'next'
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const item = await getQiitaItemByID(context.params!.id as string)
  return {
    props: {
      item,
    },
  }
}
