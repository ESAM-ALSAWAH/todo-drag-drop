import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import { MenuContainer } from './MenuContainer'
import { Box, Typography } from '@mui/material'
const Todo: React.FC<any> = ({ title, id, index }) => {
  return (
    <Box>
      <Draggable draggableId={id.toString()} index={index}>
        {(provided) => (
          <Box
            sx={{
              background: '#FFFFFF',
              boxShadow:
                ' 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              padding: '16px 32px',
              margin: '24px 25px 0px 25px',
              wordBreak: 'break-all',
              position: 'relative',
              zIndex: 1000,
            }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Link to={`/todo/${id}`}>
              <Typography variant="body2">{title}</Typography>
            </Link>
            <MenuContainer id={id} />
          </Box>
        )}
      </Draggable>
    </Box>
  )
}

export default Todo
