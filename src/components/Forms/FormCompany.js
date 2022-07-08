import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { token as contextToken } from '../../utilities/UserContext'

function FormCompany() {
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
      post(dataOther)
    }

    const getInput = async (elem) => {
      dataOther[elem.name] = await isImage(elem)
    }

    const isImage = async (elem) => {
      return await elem.name === 'logo' ? getImage(elem.files[0]) : elem.value
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
      
      fetch("http://127.0.0.1:8000/api/v1/company/profile", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} id='ccs-company-remote-submit'>
          <Form.Control name='logo' onChange={handleChange} placeholder='Company Logo' type='file'/>
          <Form.Control name='name' onChange={handleChange} placeholder='Company Name' />
          <Form.Control name='email' onChange={handleChange} placeholder='Company Email' />
          <Form.Control name='telephone' onChange={handleChange} placeholder='Telephone' />
          <Form.Control name='description' onChange={handleChange} placeholder='Description' />
          <Form.Control name='address1' onChange={handleChange} placeholder='Address 1' />
          <Form.Control name='address2' onChange={handleChange} placeholder='Address 2' />
          <Form.Control name='city' onChange={handleChange} placeholder='City' />
          <Form.Control name='region' onChange={handleChange} placeholder='Region' />
          <Form.Control name='zipcode' onChange={handleChange} placeholder='Zip Code' />
          <Form.Control name='country' onChange={handleChange} placeholder='Country' />
          <Form.Control name='contact_information' onChange={handleChange} placeholder='Contact Information' />
          <Form.Control name='duns_number' onChange={handleChange} placeholder='Duns Number' />
          <Form.Control name='cage_code' onChange={handleChange} placeholder='Cage Code' />
        </Form>
    )
}

export default FormCompany