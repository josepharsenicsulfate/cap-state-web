import React from 'react'
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

function Home() {

  const user = localStorage.getItem('user')

  const logout = (event) => {
    // event.preventDefault()
    // console.log(event)
    localStorage.removeItem('user', user)
  }

  return (
    <div className='home'>
      <Navigation />

      {/* <BrowserRouter>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter> */}

      <p>hi {user}</p>
      <form onSubmit={logout}>
        <button type='submit'>Logout</button>
      </form>
    </div>
  )
}

export default Home