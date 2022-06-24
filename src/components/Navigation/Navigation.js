import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {

  let navigate = useNavigate()

  const toggle = () => {
    document.querySelector('.link-container').classList.toggle('toggle')
  }

  const show = () => {
    document.querySelector('.mini').classList.toggle('toggle')
  }

  const logout = () => {
    localStorage.removeItem('accessKey')
    localStorage.removeItem('user')
    localStorage.removeItem('input')
    navigate('/login', {replace: true})
  }


  const root = document.querySelector('#root')

  root.addEventListener('scroll', e => {
    console.log(root.scrollTop)
  })

  return (
    <div className='nav'>
      <div className='icon-container'>
        <div className='circle' onClick={show}>
          <div className='mini'>
            <ul>
              <li><Link style={{
                color: '#fff',
                textDecoration: 'none'
              }}
              to='/user'>View profile</Link></li>
              <p id="logout" onClick={logout}>Logout</p>
            </ul>
          </div>
        </div>

        <p className='borg' onClick={toggle}>
          <FontAwesomeIcon icon='bars' />
        </p>
        {/* <button id='logout' onClick={logout}>Logout</button> */}
      </div>
      <div className='link-container'>
        <ul className='nav-link'>
          <li>
            <Link style={{textDecoration: 'none', 
              color: '#fff',
              fontSize: '2rem'
            }} to='/home'>Home</Link>
          </li>
          {/* <li>
            <Link style={{textDecoration: 'none', color: 'var(--mk-black-'}} to='/user'>User</Link>
          </li> */}
          <li>
            <Link style={{
              textDecoration: 'none', 
              color: '#fff',
              fontSize: '2rem'
              }} to='/company'>Company</Link>
          </li>
          {/* <button id='logout-mob' onClick={logout}>Logout</button> */}
        </ul>
      </div>
      <div className='header'>
        <h1>Capabilities Statement Generator</h1>
        <p>Build your perfect capabilities statement generator here for free. Because no matter what your color is, you can be what you want to be.</p>
      </div>
    </div>
  )
}

export default Navigation