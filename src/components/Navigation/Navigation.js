import React from 'react'

// import { Route, BrowserRoute } from 'react-router-dom'
import './Navigation.css'

function Navigation() {

  const toggle = () => {
    document.querySelector('.link-container').classList.toggle('toggle')
  }

  const user = localStorage.getItem('user')

  const logout = () => {
    localStorage.removeItem('user', user)
  }

  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle'></div>
        <p>hi {user}</p>
        <p className='borg' onClick={toggle}>click borg</p>
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <form onSubmit={logout}>
            <button type='submit'>Logout</button>
          </form>
        </ul>
      </div>
    </div>
  )
}

export default Navigation