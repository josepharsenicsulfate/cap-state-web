import React, { useState } from 'react'

import './Login.css'

function Login() {

  const [ input, setInput ] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const login = () => {
    input ? localStorage.setItem('user', input) : sus()
  }

  const sus = () => {
    alert('sus')
  }

  return (
    <div className='container login'>
      <div className='card'>
        <form onSubmit={login}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={inputHandler}/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type='submit'>Login</button>
          <p className='link' onClick={sus}>Don't have an account yet?</p>
        </form>
      </div>
    </div>
  )
}

export default Login