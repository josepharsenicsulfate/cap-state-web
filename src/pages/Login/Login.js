import React, { useState } from 'react'

import './Login.css'

function Login() {

  const [ input, setInput ] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const login = () => {
    input ? localStorage.setItem('username', input) : alert('sus')
  }

  return (
    <div className='card'>
        <form className='form' onSubmit={login}>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={inputHandler}/>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login