import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()

  let email, password, user

  const getInput = () => {
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
  }

  const getUser = (result) => {
    localStorage.setItem('accessKey', result.accessToken)
    localStorage.setItem('user', result.user.fname)
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
      .then(result => getUser(JSON.parse(result)))
      .then(result => navigate('/home'))
      .catch(error => console.log(error))
  }

  return (
    <div className='container login'>
      <div className='card'>
        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
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