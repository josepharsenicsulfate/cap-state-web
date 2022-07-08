import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { token as contextToken } from '../../utilities/UserContext'
// import { UserContext } from '../../utilities/UserContext'

function FormUser() {

    const [ validated, setValidated ] = useState(false)
    // const [ formData, updateFormData ] = useState('')
    // const { token } = useContext(UserContext)

    let dataOther = {}

    const handleChange = async (e) => {
      // updateFormData({
      //   ...formData,
      //   [e.target.name]: await isImage(e.target)
      // })
      getInput(e.target)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      if(form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      setValidated(true)
      // post(formData)

      // console.log(JSON.stringify(dataOther))
      post(dataOther)
    }

    const getInput = async (elem) => {
      dataOther[elem.name] = await isImage(elem)
    }

    const isImage = async (elem) => {
      return await elem.name === 'profile_picture' ? getImage(elem.files[0]) : elem.value
    }

    const getImage = async (image) => {
      return await toBase64(image)
    }

    const toBase64 = (image) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(image)
  
        fileReader.onload = () => {
          resolve(fileReader.result)
        }
  
        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

    const post = async (data) => {
      var myHeaders = new Headers()
      myHeaders.append("Accept", "application/json")
      myHeaders.append("Content-Type", "application/json")
      // myHeaders.append("Authorization", {token})
      myHeaders.append("Authorization", "Bearer " + contextToken)
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      }
      
      fetch("http://127.0.0.1:8000/api/v1/user/profile", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} id='ccs-user-remote-submit'>
        <Form.Control name='profile_picture' onChange={handleChange} placeholder='Profile Picture' type='file'/>
          <Form.Control name='lastname' onChange={handleChange} placeholder='Last Name' />
          <Form.Control name='firstname' onChange={handleChange} placeholder='First Name' />
          <Form.Control name='middlename' onChange={handleChange} placeholder='Middle Name' />
          <Form.Control name='suffixname' onChange={handleChange} placeholder='Suffix Name' />
          <Form.Control name='telephone' required onChange={handleChange} placeholder='Telephone' />
          <Form.Control name='address1' onChange={handleChange} placeholder='Address 1' />
          <Form.Control name='address2' onChange={handleChange} placeholder='Address 2' />
          <Form.Control name='city' onChange={handleChange} placeholder='City' />
          <Form.Control name='region' onChange={handleChange} placeholder='Region' />
          <Form.Control name='zipcode' onChange={handleChange} placeholder='Zip Code' />
          <Form.Control name='country' onChange={handleChange} placeholder='Country' />
      </Form>
    )
}

export default FormUser