import React from 'react'

import './Register.css'

import { Link } from 'react-router-dom'

function Register() {

  let fname, lname, email, password, cpassword

  const getInput = () => {
    fname = document.querySelector('#fname').value
    lname = document.querySelector('#lname').value
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
    cpassword = document.querySelector('#cpassword').value
  }

  const register = (event) => {
    event.preventDefault()
    getInput()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "email": email,
      "password": password,
      "password_confirmation": cpassword
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/v1/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => alert('Account registered.'))
      .catch(error => console.log('error', error));
  }

  return (
    <div className='container register'>
      <div className='card'>
        <form onSubmit={register}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" id="fname" />
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lname" id="lname" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="cpassword">Confirm Password:</label>
          <input type="password" name="password" id="cpassword" />
          <button type='submit'>Register</button>
          <Link to='/login'><p className='link'>Already have an account?</p></Link>
        </form>
      </div>

    </div>
  )
}

export default Register