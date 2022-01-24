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

export const AddTodo = () => {
  const [open, handleOpen, handleClose] = useModal()
  const [title, setTitle] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const AddTodo = useStore((state) => state.AddTodo)
  const handleAdd = () => {
    const Todo = {
      title,
      subject,
      id: Math.random(),
      status: 'todo',
    }
    AddTodo(Todo)
    handleClose()
    setTitle('')
    setSubject('')
  }
  return (
    <React.Fragment>
      <Box
        sx={{
          background: '#3DA623',
          display: 'flex',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={handleOpen}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5625 5.29166C19.9792 4.875 19.9792 4.25 19.5625 3.83333L17.1667 1.43749C16.75 1.02083 16.125 1.02083 15.7084 1.43749L13.8334 3.3125L17.7917 7.27083L19.5625 5.29166ZM1.12504 15.9167V19.875H5.08337L16.5417 8.3125L12.6875 4.35416L1.12504 15.9167ZM5.29171 0.0833282V3.20833H8.41671V5.29166H5.29171V8.41666H3.20837V5.29166H0.083374V3.20833H3.20837V0.0833282H5.29171Z"
            fill="white"
          />
        </svg>
      </Box>
      <ModalContainer
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Typography variant="h2">Add New Task</Typography>
        <TextField
          id="filled-basic"
          label="Title"
          autoComplete="off"
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
          onClick={handleAdd}
          sx={{
            width: 'fit-content',
            marginLeft: 'auto',
          }}
        >
          add
        </Button>
      </ModalContainer>
    </React.Fragment>
  )
}
