import { QiitaItem } from '@/api/QiitaApi'
import ReactMarkdown from 'react-markdown'
import { Container, Typography, Box, Chip, Link } from '@mui/material'
import remarkGfm from 'remark-gfm'

type Props = {
  item: QiitaItem
}

export default function QiitaItemDetail({ item }: Props) {
  return (
    <>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {item.title}
          </Typography>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <Typography variant="subtitle1" style={{ marginRight: 8 }}>
              {item.updated_at}
            </Typography>
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              <Typography variant="subtitle1" style={{ marginRight: 8 }}>
                {item.url}
              </Typography>
            </Link>
          </Box>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={item.body} />
        </Box>
      </Container>
    </>
  )
}
