import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  // const [ user, setUser] = useState()
  // const [ val, setVal ] = useContext(Context)

  let email, password

  const getInput = () => {
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
  }

  const getUser = (result) => {
    // setUser({accessToken: result.accessToken, user: result.user})
    result.accessToken ? localStorage.setItem('accessKey', result.accessToken) : alert('Invalid credentials.')
    navigate('/home')
  }

  const login = (e) => {
    e.preventDefault()
    
    getInput()

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      "email": email,
      "password": password
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch("http://127.0.0.1:8000/api/v1/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => 
        result.error ? alert('invalid credentials') : getUser(result))
      .catch(error => console.log(error))
  }

  return (
    <div className='container login'>
      <div className='card'>
        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" required/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required/>
          <button type='submit'>Login</button>
          <Link to='/register'>
            <p className='link'>Don't have an account yet?</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login