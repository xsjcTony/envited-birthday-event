import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Create from '@/pages/Create'
import Event from '@/pages/Event'
import Landing from '@/pages/Landing'


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<Landing />} path='/' />
    <Route element={<Create />} path='create' />
    <Route element={<Event />} path='event' />
  </>
))

export default router
