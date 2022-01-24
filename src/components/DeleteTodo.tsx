import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStore } from '../zustand/TodoStore'
const DeleteTodo: React.VFC<any> = ({ id, close }) => {
  const deleteTodo = useStore((state) => state.deleteTodo)
  const handlDelete = () => {
    deleteTodo(id)
    close()
  }
  return (
    <Box
      onClick={handlDelete}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        cursor: 'pointer',
        transition: 'background .3s ease',
        '&:hover': {
          background: '#f8f9fa',
        },
      }}
    >
      <Typography variant="body2">Delete</Typography>
      <DeleteIcon
        sx={{
          color: '#BE0909',
        }}
      />
    </Box>
  )
}
export default DeleteTodo
