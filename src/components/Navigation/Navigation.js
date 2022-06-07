import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Navigation() {

  const toggle = () => {
    document.querySelector('.link-container').classList.toggle('toggle')
  }

  // const accessKey = localStorage.getItem('accessKey')
  // const fname = localStorage.getItem('fname')

  // const logout = () => {
  //   localStorage.removeItem('accessKey', accessKey)
  // }

  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle'></div>
        <p className='borg' onClick={toggle}>
          <FontAwesomeIcon icon='bars' />
        </p>
        <p id='logout'><Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/'>Logout</Link></p>
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li><Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/home'>Home</Link></li>
          <li><Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/'>Profile</Link></li>
          <li><Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/'>About</Link></li>
          <li id='logout-mob'><Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/'>Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation