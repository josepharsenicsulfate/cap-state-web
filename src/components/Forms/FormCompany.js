import React, { useState } from 'react'
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'

function FormCompany() {
    const [ validated, setValidated ] = useState(false)
    const [ input, setInput ] = useState('')

    const handleChange = async (event) => {
      let data = {...input}
      data[event.target.name] = await isImage(event.target)
      setInput(data)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      if(form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      setValidated(true)
      post(input)
    }

    const isImage = (elem) => {
      return elem.name === 'logo' ? toBase64(elem.files[0]) : elem.value
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
      myHeaders.append("Authorization", "Bearer " + JSON.parse(sessionStorage.getItem('user')).token)
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      }
      
      await fetch("http://127.0.0.1:8000/api/v1/company/profile", requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error))
    }

    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit} id='ccs-company-remote-submit'>
                <Form.Control name='logo' onChange={event => handleChange(event)} placeholder='Company Logo' type='file'/>
                <Form.Control name='name' onChange={event => handleChange(event)} placeholder='Company Name' />
                <Form.Control name='email' onChange={event => handleChange(event)} placeholder='Company Email' required />
                <Form.Control name='telephone' onChange={event => handleChange(event)} placeholder='Telephone' required />
                <Form.Control name='description' onChange={event => handleChange(event)} placeholder='Description' />
                <Form.Control name='address1' onChange={event => handleChange(event)} placeholder='Address 1' />
                <Form.Control name='address2' onChange={event => handleChange(event)} placeholder='Address 2' />
                <Form.Control name='city' onChange={event => handleChange(event)} placeholder='City' />
                <Form.Control name='region' onChange={event => handleChange(event)} placeholder='Region' />
                <Form.Control name='zipcode' onChange={event => handleChange(event)} placeholder='Zip Code' />
                <Form.Control name='country' onChange={event => handleChange(event)} placeholder='Country' />
                <Form.Control name='contact_information' onChange={event => handleChange(event)} placeholder='Contact Information' />
                <Form.Control name='duns_number' onChange={event => handleChange(event)} placeholder='Duns Number' />
                <Form.Control name='cage_code' onChange={event => handleChange(event)} placeholder='Cage Code' />
              </Form>
            </Col>
            <Col>
              <Row>
                <Col className='p-0 px-1'> 
                  <Card className='p-4 pb-2 my-1'>
                    <Form>
                      <Row>
                        <Col className='p-0' lg={10}><Form.Control name='differentiators' onChange={event => handleChange(event)} placeholder='Differentiators'/></Col>
                        <Col className='p-0' lg={2}><Button variant='outline-danger' className='m-0'>X</Button></Col>
                      </Row>
                    </Form>
                    <Button variant='outline-success' className='w-50 mx-auto mt-2'>Add</Button>
                  </Card>
                </Col>
                <Col className='p-0 px-1'> 
                  <Card className='p-4 pb-2 my-1'>
                    <Form>
                      <Row>
                        <Col className='p-0' lg={10}><Form.Control name='capabilities' onChange={event => handleChange(event)} placeholder='Capabilities'/></Col>
                        <Col className='p-0' lg={2}><Button variant='outline-danger' className='m-0'>X</Button></Col>
                      </Row>
                    </Form>
                    <Button variant='outline-success' className='w-50 mx-auto mt-2'>Add</Button>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className='p-0 px-1'> 
                  <Card className='p-4 pb-2 my-1'>
                    <Form>
                      <Row>
                        <Col className='p-0' lg={10}><Form.Control name='certifications' onChange={event => handleChange(event)} placeholder='Certifications'/></Col>
                        <Col className='p-0' lg={2}><Button variant='outline-danger' className='m-0'>X</Button></Col>
                      </Row>
                    </Form>
                    <Button variant='outline-success' className='w-50 mx-auto mt-2'>Add</Button>
                  </Card>
                </Col>
                <Col className='p-0 px-1'> 
                  <Card className='p-4 pb-2 my-1'>
                    <Form>
                      <Row>
                        <Col className='p-0' lg={10}><Form.Control name='naics_codes' onChange={event => handleChange(event)} placeholder='NAICS codes'/></Col>
                        <Col className='p-0' lg={2}><Button variant='outline-danger' className='m-0'>X</Button></Col>
                      </Row>
                    </Form>
                    <Button variant='outline-success' className='w-50 mx-auto mt-2'>Add</Button>
                  </Card>
                </Col>
              </Row>
              <Row>
              </Row>
            </Col>
          </Row>
        </Container>

      </>

    )
}

export default FormCompany