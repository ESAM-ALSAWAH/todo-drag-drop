import { Route, Routes } from 'react-router-dom'
import { Home, Id } from '../pages'

export const RenderPage = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/todo/:id" element={<Id />} />
  </Routes>
)
