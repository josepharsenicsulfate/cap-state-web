import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {

  // let fname, lname, email, password, cpassword
  let email, password, cpassword

  const getInput = () => {
    // fname = document.querySelector('#fname').value
    // lname = document.querySelector('#lname').value
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
      // "fname": fname,
      // "lname": lname,
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
      .then(document.querySelector('.modal').style.display = 'flex')
      .catch(error => console.log('error', error));
  }

  return (
    <div className='container register'>
      <div className='card'>
        <form onSubmit={register}>
          <h1>Create an Account</h1>
          {/* <label htmlFor="fname">First Name:</label>
          <input required type="text" name="fname" id="fname" />
          <label htmlFor="lname">Last Name:</label>
          <input required type="text" name="lname" id="lname" /> */}
          <label htmlFor="email">Email:</label>
          <input required type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input required type="password" name="password" id="password" />
          <label htmlFor="cpassword">Confirm Password:</label>
          <input required type="password" name="password" id="cpassword" />
          <button type='submit' style={{
            backgroundColor: 'hsl(215, 65%, 63%)',
            borderRadius: '40px',
            padding: '10px 25px',
            margin: '50px auto 15px auto',
            width: '75%'
          }}>Register</button>
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