import Button from '@mui/material/Button'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar, jaJP } from '@mui/x-data-grid'
import Link from 'next/link'
import * as React from 'react'

const cols: GridColDef[] = [
  { field: 'title', headerName: 'タイトル', flex: 1 },
  {
    field: 'urlButton',
    headerName: '詳細',
    width: 100,
    renderCell: (params) => (
      <Link href={`/detail/${params.row.id}`}>
        <Button variant='contained' color='primary'>
          詳細
        </Button>
      </Link>
    ),
  },
  { field: 'updated_at', headerName: '更新日時', width: 150 },
]

export default function QiitaItemsGrid(props: { rows: GridRowsProp }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={cols}
        slots={{
          toolbar: GridToolbar,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        autoHeight
      />
    </div>
  )
}
