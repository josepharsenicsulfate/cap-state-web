import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Company from './pages/Company/Company'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from './UserContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faFloppyDisk, faPrint, faDownload, faEdit, faWindowClose, faLightbulb, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
// import React, { useState } from 'react'
import React from 'react'

library.add(faBars, faFloppyDisk, faPrint, faDownload, faEdit, faWindowClose, faLightbulb, faPlusSquare)

function App() {
  // const Context = React.createContext()
  // const [ user, setUser ] = useState()

  return (
    <div className='container'>
      <UserContext.Provider value={''}>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/user' element={<Profile />}/>
          <Route path='/company' element={<Company />}/>
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
