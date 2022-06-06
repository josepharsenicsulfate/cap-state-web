import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import { Link, Navigate } from 'react-router-dom'

function Login() {

  let email, password

  const getInput = () => {
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
  }

  // const redirect = (accessKey) => {
  //   localStorage.setItem('accessKey', accessKey)
  //   Navigate('/home')
  // }

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
      .then(result => console.log(JSON.parse(result)))
      // .then(result => JSON.parse(result).accessToken ? redirect(JSON.parse(result).accessToken) : alert('Invalid credentials.'))
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