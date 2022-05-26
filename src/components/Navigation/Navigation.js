import React from 'react'

import { Route, BrowserRoute } from 'react-router-dom'
import './Navigation.css'

function Navigation(props) {
  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle'></div>
        <p>borg</p>
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <form onSubmit={props.logout}>
            <button type='submit'>Logout</button>
          </form>
        </ul>
      </div>
    </div>
  )
}

export default Navigation