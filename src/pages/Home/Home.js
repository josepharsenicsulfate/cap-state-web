import React from 'react'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

function Home() {

  const username = localStorage.getItem('username')

  const logout = (event) => {
    // event.preventDefault()
    // console.log(event)
    localStorage.removeItem('username', username)
  }

  return (
    <div className='home'>
    <Navigation />
      <p>hi {username}</p>
      <form onSubmit={logout}>
        <button type='submit'>Logout</button>
      </form>
    </div>
  )
}

export default Home