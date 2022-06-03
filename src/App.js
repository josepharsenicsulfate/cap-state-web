import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
