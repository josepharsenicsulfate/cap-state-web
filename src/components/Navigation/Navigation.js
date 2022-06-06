import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Navigation() {

  const toggle = () => {
    document.querySelector('.link-container').classList.toggle('toggle')
  }

  const accessKey = localStorage.getItem('accessKey')
  // const fname = localStorage.getItem('fname')

  const logout = () => {
    localStorage.removeItem('accessKey', accessKey)
  }

  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle'></div>
        <p>hi user</p>
        <p className='borg' onClick={toggle}>
          <FontAwesomeIcon icon='bars' />
        </p>
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/'>Profile</Link></li>
          <li><Link to='/'>About</Link></li>
          <button onClick={logout}>Logout</button>
        </ul>
      </div>
    </div>
  )
}

export default Navigation