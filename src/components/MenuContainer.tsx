import React, { Suspense, useMemo } from 'react'
import useLazy from 'uselazy'
import { styled, alpha } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/system'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { jsx } from '@emotion/react'

/* const DeleteTodo = React.lazy((): any => import('./DeleteTodo'))
const EditTodo = React.lazy((): any => import('./EditTodo')) */
/* const DeleteTodo = [() => import('./DeleteTodo')] */
const imports = [() => import('./EditTodo'), () => import('./DeleteTodo')]

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export const MenuContainer: React.FC<any> = ({ id }) => {
  const [shouldImport, setShouldImport] = React.useState(false)
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorMenu)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget)
    setShouldImport((prev) => true)
  }
  const closeMenu = () => setAnchorMenu(null)
  const { isLoading, result: Components } = useLazy(
    // Preserves identity of "imports" so it can be safely add as a dependency of useEffect
    // inside useLazy
    useMemo(() => imports, []),
    shouldImport,
  )

  return (
    <Box
      sx={{
        position: 'absolute',
        right: '5px',
        top: '5px',
      }}
    >
      <IconButton onClick={handleClick}>
        <MoreVertIcon
          sx={{
            color: '#C4C4C4',
          }}
        />
      </IconButton>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorMenu}
        open={open}
        onClose={() => {
          closeMenu()
          setShouldImport(false)
        }}
        sx={{
          minWidth: '110px !important',
        }}
      >
        {Components &&
          Components.map((Component: any, index: Number) => (
            <Component id={id} close={closeMenu} key={index} />
          ))}
      </StyledMenu>
    </Box>
  )
}
