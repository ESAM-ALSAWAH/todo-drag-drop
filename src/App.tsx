import React from 'react'
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import { ThemeProvider, Box, Typography } from '@mui/material'
import { theme } from './themes'
import { RenderPage } from './routes/index.routes'
import './style.css'
const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          overflow: 'auto',
          height: '100vh',
          padding: '60px 0 0 0 ',
        }}
      >
        <Typography variant="h1" textAlign="center" my="50px">
          Todo List
        </Typography>

        <Router>
          <RenderPage />
        </Router>
      </Box>
    </ThemeProvider>
  )
}
export default App
