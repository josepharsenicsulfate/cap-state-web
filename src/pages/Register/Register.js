import React, { useState } from 'react'

import './Register.css'

function Register() {

  const [ input, setInput ] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const login = () => {
    input ? localStorage.setItem('user', input) : alert('sus')
  }

  return (
    <div className='card'>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" onChange={inputHandler}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" name="cpassword" id="cpassword" />
        <button type='submit'>Register</button>
        <p className='link'>Already have an account?</p>
      </form>
    </div>
  )
}

export default Register