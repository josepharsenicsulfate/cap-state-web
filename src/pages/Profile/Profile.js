import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
        <Navigation />
        <div className='cover'>
            <div className='photo'>photo pog</div>
        </div>
        <div className='deets'>
            <h1>John Doe</h1>
            <p>Senior Software Developer</p>
            <p>Adress St., Random City</p>
            <p>+123 456 789</p>
            <p>example@email.com</p>
            <h3>Company X</h3>
            <p>Adress St., Random City</p>
            <p>+123 456 789</p>
            <p>example@email.com</p>
        </div>
    </div>
  )
}

export default Profile