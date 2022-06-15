import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './Profile.css'

function Profile() {

  useEffect(()  => {
    get()
    getFormData()
  })

  const hide = (e) => {
    e.preventDefault()
    document.querySelector('.user-form').classList.toggle('hide')
  }

  const get = () => {
    var myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessKey'))

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch("http://127.0.0.1:8000/api/v1/user", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => reflect(result.results[0].user_profile))
      .catch(error => console.log('error', error))
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

  let inputProfGet = {
    last: '',
    first: '',
    middle: '',
    suffix: '',
    telephone: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    zipcode: '',
    country: ''
  }

  const getFormData = () => {
    inputProfGet.last = document.getElementById('last-form').value
    inputProfGet.first = document.getElementById('first-form').value
    inputProfGet.middle = document.getElementById('middle-form').value
    inputProfGet.suffix = document.getElementById('suffix-form').value
    inputProfGet.telephone = document.getElementById('telephone-form').value
    inputProfGet.address1 = document.getElementById('address1-form').value
    inputProfGet.address2 = document.getElementById('address2-form').value
    inputProfGet.city = document.getElementById('city-form').value
    inputProfGet.region = document.getElementById('region-form').value
    inputProfGet.zipcode = document.getElementById('zipcode-form').value
    inputProfGet.country = document.getElementById('country-form').value
  }

  const post = (e) => {
    e.preventDefault()
    
    getFormData() 

    var myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessKey'))

    var formdata = new FormData()
    formdata.append("profile_picture", "photo.jpeg")
    formdata.append("lastname", inputProfGet.last)
    formdata.append("firstname", inputProfGet.first)
    formdata.append("suffixname", inputProfGet.suffix)
    formdata.append("telephone", inputProfGet.telephone)
    formdata.append("middlename", inputProfGet.middle)
    formdata.append("address1", inputProfGet.address1)
    formdata.append("address2", inputProfGet.address2)
    formdata.append("city", inputProfGet.city)
    formdata.append("region", inputProfGet.region)
    formdata.append("zipcode", inputProfGet.zipcode)
    formdata.append("country", inputProfGet.country)

    for(let [name, value] of formdata) {
      console.log(`${name} = ${value}`)
    }

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }

    console.log(requestOptions)

    fetch("http://127.0.0.1:8000/api/v1/user/profile", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
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
          <h1 id='name'>Lorem</h1>
          <p id='telephone'>Ipsum</p>
          <p id='address1'>Dolor</p>
          <p id='address2'>Sit</p>
          <p id='city'>Amet</p>
          <p id='region'>Lorem</p>
          <p id='zipcode'>Ipsum</p>
          <p id='country'>Dolor</p>
        </div>

        <div className='user-form hide'>
          <form onSubmit={post}>
            <input type="file" placeholder='profile pic' />
            <input type="text" placeholder='last' id='last-form' />
            <input type="text" placeholder='first' id='first-form' />
            <input type="text" placeholder='middle' id='middle-form' />
            <input type="text" placeholder='suffix' id='suffix-form' />
            <input type="text" placeholder='telephone' id='telephone-form' />
            <input type="text" placeholder='address1' id='address1-form' />
            <input type="text" placeholder='address2' id='address2-form' />
            <input type="text" placeholder='city' id='city-form' />
            <input type="text" placeholder='region' id='region-form' />
            <input type="text" placeholder='zipcode' id='zipcode-form' />
            <input type="text" placeholder='country' id='country-form' />
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

export default Profile