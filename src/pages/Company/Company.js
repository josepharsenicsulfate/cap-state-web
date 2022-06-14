import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import './Company.css'

function Company() {

  useEffect(()  => {
    console.log('test')
  })

  const hide = (e) => {
    e.preventDefault()
    document.querySelector('.user-form').classList.toggle('hide')
  }

  const get = () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessKey'));

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/v1/user", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => reflect(result.results[0].user_profile))
      .catch(error => console.log('error', error));
  }

  const reflect = (result) => {
    document.querySelector('#name').innerHTML = result.firstname + ' ' + result.lastname
    document.querySelector('#telephone').innerHTML = result.telephone
    document.querySelector('#address1').innerHTML = result.address1
    document.querySelector('#address2').innerHTML = result.address2
    document.querySelector('#city').innerHTML = result.city
    document.querySelector('#region').innerHTML = result.region
    document.querySelector('#zipcode').innerHTML = result.zipcode
    document.querySelector('#country').innerHTML = result.country
  }

  return (
    <div className='profile'>
        <Navigation />
        <div className='cover'>
            <div className='photo'>photo pog</div>
        </div>
        <div className='deets'>
          <button onClick={hide}>Edit <FontAwesomeIcon icon='edit' /></button>
          <button onClick={get}>Test <FontAwesomeIcon icon='edit' /></button>
          <h1>Company X</h1>
        </div>

        <div className='user-form hide'>
          <form action="">
            <input type="file" placeholder='profile pic' />
            <input type="text" placeholder='last' />
            <button type='submit'>Save <FontAwesomeIcon icon='floppy-disk' /></button>
            <p onClick={hide} style={{
              color: 'var(--mk-black-)',
              position: 'absolute',
              top: '4.2rem',
              left: '22.7rem',
              fontSize: '1.5rem'
            }}><FontAwesomeIcon icon='window-close' /></p>
          </form>
        </div>
    </div>
  )
}

export default Company