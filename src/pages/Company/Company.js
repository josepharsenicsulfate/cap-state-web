import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './Company.css'

function Company() {

  useEffect(() => {
    setCompanyContent()
    getCInfo()
  })

  const hide = () => {
    document.querySelector('.user-form').classList.toggle('hide')
  }

  const getCInfo = () => {
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
    document.querySelector('#cdesc').innerHTML = result.description
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

  let inputCProfGet = {
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
    inputCProfGet.name = document.getElementById('cname-form').value
    inputCProfGet.telephone = document.getElementById('ctelephone-form').value
    inputCProfGet.email = document.getElementById('cemail-form').value
    inputCProfGet.description = document.getElementById('cdescription-form').value
    inputCProfGet.address1 = document.getElementById('cadd1-form').value
    inputCProfGet.address2 = document.getElementById('cadd2-form').value
    inputCProfGet.city = document.getElementById('ccity-form').value
    inputCProfGet.region = document.getElementById('cregion-form').value
    inputCProfGet.zipcode = document.getElementById('czip-form').value
    inputCProfGet.country = document.getElementById('ccountry-form').value
    inputCProfGet.duns_number = document.getElementById('cnumber-form').value
    inputCProfGet.cage_code = document.getElementById('ccage-form').value
    inputCProfGet.contact_information = document.getElementById('ccontact-form').value
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
        'profile_picture':  inputCProfGet.image,
        'lastname': inputCProfGet.last,
        'firstname': inputCProfGet.first,
        'middlename': inputCProfGet.middle,
        'suffixname': inputCProfGet.suffix,
        'telephone': inputCProfGet.telephone,
        'address1': inputCProfGet.address1,
        'address2': inputCProfGet.address2,
        'city': inputCProfGet.city,
        'region': inputCProfGet.region,
        'zipcode': inputCProfGet.zipcode,
        'country': inputCProfGet.country
      }),
      redirect: 'follow'
    }

    fetch("http://127.0.0.1:8000/api/v1/user/profile",requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error',error))
  }

  const fields = [
    'cname',
    'ctelephone',
    'cemail',
    'cdesc',
    'cadd1',
    'cadd2',
    'ccity',
    'cregion',
    'czip',
    'ccountry',
    'cnumber',
    'ccage',
    'ccontact'
  ]

  const setCompanyContent = () => {
    let container = document.querySelector('.company-details')
    for (let i = 0; i < fields.length; i++) {
      let newChild
      i === 0 ? newChild = document.createElement('h1') : newChild = document.createElement('p')
      newChild.id = fields[i]
      container.appendChild(newChild)
    }
  }

  return (
    <div className='profile'>
        <Navigation />
        <div className='cover'>
            <div className='photo'>photo pog</div>
        </div>
        <div className='company-details'>
          <button onClick={hide}>Edit <FontAwesomeIcon icon='edit' /></button>
          {/* <button onClick={getCInfo}>Test <FontAwesomeIcon icon='edit' /></button> */}
        </div>
        <div className='user-form hide'>
          <form onSubmit={post}>
            <input type="text" placeholder="name" id="cname-form" />
            <input type="text" placeholder="telephone" id="ctelephone-form" />
            <input type="text" placeholder="email" id="cemail-form" />
            <input type="text" placeholder="description" id="cdescription-form" />
            <input type="text" placeholder="address 1" id="cadd1-form" />
            <input type="text" placeholder="address 2" id="cadd2-form" />
            <input type="text" placeholder="city" id="ccity-form" />
            <input type="text" placeholder="region" id="cregion-form" />
            <input type="text" placeholder="zip" id="czip-form" />
            <input type="text" placeholder="country" id="ccountry-form" />
            <input type="text" placeholder="number" id="cnumber-form" />
            <input type="text" placeholder="cage" id="ccage-form" />
            <input type="text" placeholder="contact" id="ccontact-form" />
            <button type='submit'>Save <FontAwesomeIcon icon='floppy-disk' /></button>
            <p onClick={hide} style={{
              color: 'var(--mk-black-)',
              position: 'relative',
              top: '-34rem',
              left: '41rem',
              fontSize: '1.5rem'
            }}><FontAwesomeIcon icon='window-close' /></p>
          </form>
        </div>
    </div>
  )
}

export default Company