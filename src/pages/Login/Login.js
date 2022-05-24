import React, { useState } from 'react'

import './Login.css'

import Form from '../../components/Form/Form'

function Login() {

  const [ input, setInput ] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const login = () => {
    input ? localStorage.setItem('user', input) : alert('sus')
  }

  const hide = () => {
    document.querySelector('form.login').style.display = 'none'
  }

  return (
    <div className='card'>
      <Form 
        login={login} 
        inputHandler={inputHandler} 
        hide={hide}
      />
    </div>
  )
}

export default Login