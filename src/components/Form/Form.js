import React from 'react'

import './Form.css'

function Form(props) {
  return (
    <form className='form login' onSubmit={props.login}>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' onChange={props.inputHandler}/>

        {/* <label htmlFor="password">Password</label>
        <input type='password' name='password' /> */}

        <button type="submit">Login</button>
        <p onClick={props.hide}>don't have an account yet?</p>
    </form>
  )
}

export default Form