import React from 'react'

function Funcs() {
    // const hide = (e) => {
    //     e.preventDefault()
    //     document.querySelector('.user-form').classList.toggle('hide')
    // }

    // const get = () => {
    //     var myHeaders = new Headers()
    //     myHeaders.append("Accept", "application/json")
    //     myHeaders.append("Content-Type", "application/json")
    //     myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessKey'))
    
    //     var requestOptions = {
    //       method: 'GET',
    //       headers: myHeaders,
    //       redirect: 'follow'
    //     }
    
    //     fetch("http://127.0.0.1:8000/api/v1/user", requestOptions)
    //       .then(response => response.text())
    //       .then(result => JSON.parse(result))
    //       .then(result => reflect(result.results[0].user_profile))
    //       .catch(error => console.log('error', error))
    // }

    // const reflect = (result) => {
    //     document.querySelector('#name').innerHTML = result.firstname + ' ' + result.lastname
    //     document.querySelector('#telephone').innerHTML = result.telephone
    //     document.querySelector('#address1').innerHTML = result.address1
    //     document.querySelector('#address2').innerHTML = result.address2
    //     document.querySelector('#city').innerHTML = result.city
    //     document.querySelector('#region').innerHTML = result.region
    //     document.querySelector('#zipcode').innerHTML = result.zipcode
    //     document.querySelector('#country').innerHTML = result.country
    // }

    // const getFormData = () => {
    //     inputProfGet.image = document.getElementById('image-form').value
    //     inputProfGet.last = document.getElementById('last-form').value
    //     inputProfGet.first = document.getElementById('first-form').value
    //     inputProfGet.middle = document.getElementById('middle-form').value
    //     inputProfGet.suffix = document.getElementById('suffix-form').value
    //     inputProfGet.telephone = document.getElementById('telephone-form').value
    //     inputProfGet.address1 = document.getElementById('address1-form').value
    //     inputProfGet.address2 = document.getElementById('address2-form').value
    //     inputProfGet.city = document.getElementById('city-form').value
    //     inputProfGet.region = document.getElementById('region-form').value
    //     inputProfGet.zipcode = document.getElementById('zipcode-form').value
    //     inputProfGet.country = document.getElementById('country-form').value
    // }

    // const post = (e) => {
    //     e.preventDefault()
    //     getFormData()
    
    //     var myHeaders = new Headers()
    //     myHeaders.append("Accept", "application/json")
    //     myHeaders.append("Content-Type", "application/json")
    //     myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessKey'))
    
    //     var requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       body: JSON.stringify({
    //         'profile_picture':  inputProfGet.image,
    //         'lastname': inputProfGet.last,
    //         'firstname': inputProfGet.first,
    //         'middlename': inputProfGet.middle,
    //         'suffixname': inputProfGet.suffix,
    //         'telephone': inputProfGet.telephone,
    //         'address1': inputProfGet.address1,
    //         'address2': inputProfGet.address2,
    //         'city': inputProfGet.city,
    //         'region': inputProfGet.region,
    //         'zipcode': inputProfGet.zipcode,
    //         'country': inputProfGet.country
    //       }),
    //       redirect: 'follow'
    //     }
    
    //     fetch("http://127.0.0.1:8000/api/v1/user/profile",requestOptions)
    //       .then(response => response.text())
    //       .then(result => console.log(result))
    //       .catch(error => console.log('error',error))
    // }
}

export default Funcs