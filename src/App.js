import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'

import { Routes, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faFloppyDisk, faPrint } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faFloppyDisk, faPrint)

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
