import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import { useStore } from '../zustand/TodoStore'
import Todo from './Todo'
import { AddTodo } from './AddTodo'
export const TodoBox: React.FC<any> = ({ col }) => {
  const todo = useStore((state: any) => state.todo)
  const theme = useTheme()
  return (
    <Droppable droppableId={col.title}>
      {(provided) => (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingBottom: '5px',
              margin: '0 25px',
              borderLeft: `5px solid ${theme.palette.status[col.title]}`,
              zIndex: '1000',
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ padding: '4px 0' }}>
                {col.title}
              </Typography>
              <Typography>{col.description}</Typography>
            </Box>
            {col.title === 'todo' && <AddTodo />}
          </Box>
          <Box
            sx={{
              minHeight: '20px',
              maxHeight: '400px',
              overflow: 'auto',
              borderRadius: '16px ',
            }}
            className="todo-block"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todo
              ?.filter((item: any) => item.status === col.title)
              .map((value: any, index: any) => (
                <Todo
                  key={value.title}
                  title={value.title}
                  id={value.id}
                  index={index}
                />
              ))}
            {provided.placeholder}
          </Box>
        </Box>
      )}
    </Droppable>
  )
}
