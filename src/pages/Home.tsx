import React, { useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { TodoBox } from '../components'
import { Columns } from '../constants'
import { useStore } from '../zustand/TodoStore'
export const Home = () => {
  const updateTodo = useStore((state) => state.updateTodo)
  const theme = useTheme()
  const onDrag = (event: DropResult) => {
    if (!event.destination) return
    const id = event.draggableId
    const status = event.destination?.droppableId
    updateTodo(id, status)
  }
  return (
    <Box
      display="grid"
      width="100vw"
      margin="auto"
      marginBottom="4rem"
      gap={5}
      sx={{
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(4, 1fr)',
        },
        padding: '0 2rem',
      }}
    >
      <DragDropContext onDragEnd={onDrag}>
        {Columns.map((col: any, index: any) => (
          <Box
            sx={{
              padding: '16px 0 10px 0',
              height: 'fit-content',
              boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
            bgcolor={theme.palette.primary.main}
            borderRadius={theme.shape.borderRadius}
            key={index}
          >
            <TodoBox col={col} />
          </Box>
        ))}
      </DragDropContext>
    </Box>
  )
}
