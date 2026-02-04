import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Auth />} />

   </Routes>
    </div>
  )
}

export default App
