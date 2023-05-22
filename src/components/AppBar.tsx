import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'
import * as React from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

type SearchAppBarProps = {
  setApiKey: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchAppBar({ setApiKey }: SearchAppBarProps) {
  const [searchValue, setSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [tempApiKey, setTempApiKey] = React.useState('') // 追加: 一時的なAPIキーの状態

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSearchButtonClick = () => {
    console.log(searchValue)
  }

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempApiKey(event.target.value) // 更新: 一時的なAPIキーの状態を更新
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOk = () => {
    // 追加: OKボタンがクリックされたときの処理
    setApiKey(tempApiKey) // APIキーの状態を更新
    handleClose() // ダイアログを閉じる
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Sample Qiita App
          </Typography>
          <Search>
            <SearchIconWrapper
              color='inherit'
              onClick={handleSearchButtonClick}
              aria-label='search'
            >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </Search>
          <Button color='inherit' onClick={handleOpen}>
            Set API Key
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set API Key</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your Qiita API Key:</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='apiKey'
            label='API Key'
            type='text'
            fullWidth
            onChange={handleApiKeyChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
