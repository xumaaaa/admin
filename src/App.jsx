import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.scss'
import AdminPages from './pages/AdminPage'
import AdminPage from './pages/AdminPage'


const App = () => {
  return (
<>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='admin' element={<AdminPage/>} />
    </Routes>
</>  )
}

export default App
