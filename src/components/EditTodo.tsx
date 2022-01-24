import {
  Box,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
} from '@mui/material'
import React, { useState } from 'react'
import { ModalContainer } from './ModalContainer'
import { useModal } from '../hooks'
import { useStore } from '../zustand/TodoStore'
import EditIcon from '@mui/icons-material/Edit'

const EditTodo: React.VFC<any> = ({ id, close }) => {
  const todo = useStore((state: any) => state?.todo)
  const editTodo = useStore((state: any) => state?.editTodo)
  const [open, handleOpen, handleClose] = useModal()
  const [title, setTitle] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  let index = 0
  React.useLayoutEffect(() => {
    // get index
    const Index = todo.findIndex((t: any) => t.id == id)
    index = Index
    setTitle((prev: string) => todo[Index].title)
    setSubject((prev: string) => todo[Index].subject)
  }, [id])
  const handleEdit = () => {
    const Todo = {
      title,
      subject,
    }
    editTodo(index, Todo)
    handleClose()
    close()
    setTitle('')
    setSubject('')
  }
  return (
    <React.Fragment>
      <Box
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
        onClick={handleOpen}
      >
        <Typography variant="body2">Edit</Typography>
        <EditIcon
          sx={{
            color: '#1695BD',
          }}
        />
      </Box>
      <ModalContainer
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Typography variant="h2">Edit Task</Typography>
        <TextField
          id="filled-basic"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            color: 'red',
            background: '#fff',
          }}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          maxRows={5}
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            width: '100%',
            resize: 'none',
            height: '173px',
            border: 'none',
            outline: 'none',
            padding: '20px',
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleEdit}
          sx={{
            width: 'fit-content',
            marginLeft: 'auto',
          }}
        >
          edit
        </Button>
      </ModalContainer>
    </React.Fragment>
  )
}
export default EditTodo
