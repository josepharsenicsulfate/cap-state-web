import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Company from './pages/Company/Company'
import Error from './pages/Error/Error'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faFloppyDisk, faPlus)

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/company' element={<Company />} />
            <Route path='*' element={<Error />}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
