import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {

  let navigate = useNavigate()

  const toggle = () => {
    document.querySelector('.link-container').classList.toggle('toggle')
  }

  const logout = () => {
    localStorage.removeItem('accessKey', localStorage.getItem('accessKey'))
    localStorage.removeItem('user', localStorage.getItem('user'))
    navigate('/login', {replace: true})
  }

  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle'></div>
        <p className='borg' onClick={toggle}>
          <FontAwesomeIcon icon='bars' />
        </p>
        <button id='logout' onClick={logout}>Logout</button>
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li>
            <Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/home'>Home</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/profile'>Profile</Link>
          </li>
          <button id='logout-mob' onClick={logout}>Logout</button>
        </ul>
      </div>
    </div>
  )
}

export default Navigation