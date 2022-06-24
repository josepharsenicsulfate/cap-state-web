import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {

  let email, password, cpassword

  const getInput = () => {
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
    cpassword = document.querySelector('#cpassword').value
  }

  let start = 0
  let interval = 2000

  const match = () => {
    getInput()

    clearTimeout(interval)
    if(cpassword){
      start = setTimeout(
        () => {
          password === cpassword 
          ? inputOK()
          : document.querySelector('#error').style.visibility = 'visible'
        },
        interval
      )
    }
  }

  const inputOK = () => {
    document.querySelector('#register').disabled = false
    document.querySelector('#error').style.visibility = 'hidden'
  }

  const register = (event) => {
    event.preventDefault()

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      "email": email,
      "password": password,
      "password_confirmation": cpassword
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch("http://127.0.0.1:8000/api/v1/auth/register", requestOptions)
      .then(response => response.text())
      .then(document.querySelector('.modal').style.display = 'flex')
      .catch(error => console.log('error', error))
  }



  return (
    <div className='container register'>
      <div className='card'>
        <form onSubmit={register}>
          <h1>Create an Account</h1>
          <label htmlFor="email">Email:</label>
          <input required type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input required type="password" name="password" id="password" onChange={match}/>
          <label htmlFor="cpassword">Confirm Password:</label>
          <input required type="password" name="password" id="cpassword" onChange={match}/>
          <p id='error'>Passwords do not match!</p>
          <button id='register' type='submit' disabled>Register</button>
          <p style={{
            color: '#fff',
            fontSize: '0.8rem',
            textAlign: 'center'
            }}>Already have an account? <Link to='/login' style={{
            color: '#31D5F9',
            fontSize: '0.8rem',
            textDecoration: 'none'
            }}>Sign in here!</Link></p>
        </form>
      </div>
      <div className='modal'>
        <div>
          <h1 style={{marginBottom: '50px'}}>Registered successfully!</h1>
          <Link to='/login' style={{
            backgroundColor: 'hsl(215, 65%, 63%)',
            borderRadius: '40px',
            padding: '10px 25px',
            margin: '100px auto 15px auto',
            width: '75%',
            textDecoration: 'none'
          }}>Back to login
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Register