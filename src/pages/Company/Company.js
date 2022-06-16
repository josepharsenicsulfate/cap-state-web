import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './Company.css'

function Company() {

  useEffect(() => {
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
      .then(result => reflect(result.results[0].company_profile))
      .catch(error => console.log('error', error))
  }

  const reflect = (result) => {
    document.querySelector('#cname').innerHTML = result.name
    document.querySelector('#ctelephone').innerHTML = result.telephone
    document.querySelector('#cemail').innerHTML = result.email
    document.querySelector('#cdescription').innerHTML = result.description
    document.querySelector('#cadd1').innerHTML = result.address1
    document.querySelector('#cadd2').innerHTML = result.address2
    document.querySelector('#ccity').innerHTML = result.city
    document.querySelector('#cregion').innerHTML = result.region
    document.querySelector('#czip').innerHTML = result.zipcode
    document.querySelector('#ccountry').innerHTML = result.country
    document.querySelector('#cnumber').innerHTML = result.duns_number
    document.querySelector('#ccage').innerHTML = result.cage_code
    document.querySelector('#ccontact').innerHTML = result.contact_information
  }

  let inputProfGet = {
    name: '',
    telephone: '',
    email: '',
    description: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    zipcode: '',
    country: '',
    duns_number: '',
    cage_code: '',
    contact_information: ''
  }

  const getFormData = () => {
    inputProfGet.image = document.getElementById('image-form').value
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

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        'profile_picture':  inputProfGet.image,
        'lastname': inputProfGet.last,
        'firstname': inputProfGet.first,
        'middlename': inputProfGet.middle,
        'suffixname': inputProfGet.suffix,
        'telephone': inputProfGet.telephone,
        'address1': inputProfGet.address1,
        'address2': inputProfGet.address2,
        'city': inputProfGet.city,
        'region': inputProfGet.region,
        'zipcode': inputProfGet.zipcode,
        'country': inputProfGet.country
      }),
      redirect: 'follow'
    }

    fetch("http://127.0.0.1:8000/api/v1/user/profile",requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error',error))
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
          <h1 id='cname'>Name</h1>
          <p id='ctelephone'>Telephone</p>
          <p id='cemail'>Email</p>
          <p id='cdesc'>Description</p>
          <p id='cadd1'>Address</p>
          <p id='cadd2'>Address</p>
          <p id='ccity'>City</p>
          <p id='cregion'>Region</p>
          <p id='czip'>Zip</p>
          <p id='ccountry'>Country</p>
          <p id='cnumber'>Number</p>
          <p id='ccage'>Cage</p>
          <p id='ccontact'>Contact</p>
        </div>

        <div className='user-form hide'>
          <form action="">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button type='submit'>Save <FontAwesomeIcon icon='floppy-disk' /></button>
            <p onClick={hide} style={{
              color: 'var(--mk-black-)',
              position: 'relative',
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