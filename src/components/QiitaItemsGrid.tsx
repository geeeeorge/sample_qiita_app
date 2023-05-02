import Button from '@mui/material/Button'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar, jaJP } from '@mui/x-data-grid'
import * as React from 'react'

const cols: GridColDef[] = [
  { field: 'title', headerName: 'タイトル', width: 800 },
  {
    field: 'urlButton',
    headerName: '詳細',
    width: 100,
    renderCell: (params) => (
      <Button variant='contained' color='primary'>
        詳細
      </Button>
    ),
  },
  { field: 'updated_at', headerName: '更新日時', width: 300 },
]

export default function QiitaItemsGrid(props: { rows: GridRowsProp }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={cols}
        slots={{
          toolbar: GridToolbar,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  )
}
