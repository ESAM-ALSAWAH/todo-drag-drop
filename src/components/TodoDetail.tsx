import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
export const TodoDetail: React.VFC<any> = ({ todo }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        maxWidth: '1176px',
        width: '100%',
        margin: 'auto',
        padding: '0 1rem',
      }}
    >
      <Typography variant="h1">Task Detail</Typography>
      <Card
        sx={{
          margin: '2rem auto',
          borderRadius: '16px ',
          bgcolor: `${theme.palette.primary.main}`,
          boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <Box>
            <Typography variant="h3" margin="7.5px 0">
              Title
            </Typography>
            <Typography variant="body2">{todo.title}</Typography>
          </Box>
          <Box>
            <Typography variant="h3" margin="7.5px 0">
              Subject
            </Typography>
            <Typography variant="body2">{todo.subject}</Typography>
          </Box>
          <Box>
            <Box>
              <Typography variant="h3" margin="7.5px 0">
                status
              </Typography>
            </Box>

            <Typography variant="body2" display="flex" alignItems="center">
              <Typography
                sx={{
                  width: '13px',
                  height: ' 13px',
                  background: '#5EB149',
                  borderRadius: '50%',
                  marginInlineEnd: '10px',
                }}
              ></Typography>
              {todo.status}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Link to="/">
        <Button variant="contained" color="info">
          Back
        </Button>
      </Link>
    </Box>
  )
}
