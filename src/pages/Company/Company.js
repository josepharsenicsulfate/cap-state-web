import React, { useEffect, useState } from 'react'
import { Container, Button, Image, Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FormCompany from '../../components/Forms/FormCompany'
import Navigation from '../../components/Navigation/Navigation'

function Company() {
  const navigate = useNavigate()
  const [ loggedUser, setLoggedUser ] = useState('')
  const [ company, setCompany ] = useState('')

  const session = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    session ? setLoggedUser(session) : navigate('/login')
    get()
  },[])

  const setDefault = () => {
    setCompany({
      name: 'not set',
      email: 'not set',
      logo: 'company_logo/default_image.png',
      description: 'not set',
      telephone: 'not set',      
      address1: 'not set',
      address2: 'not set',
      city: 'not set',
      region: 'not set',
      zipcode: 'not set',
      country: 'not set',
      duns_number: 'not set',
      cage_code: 'not set',
      contact_information: 'not set'
    })
  }

  const get = async () => {
    var myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${session.token}`)

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    await fetch("http://127.0.0.1:8000/api/v1/user", requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result => result.results[0].company_profile === null ? setDefault() : setCompany(result.results[0].company_profile))
    .catch(error => console.log('error', error))
  }

  const toggleForm = () => {
    document.getElementById('ccs-company-edit').classList.toggle('d-none')
    document.getElementById('ccs-company-save').classList.toggle('d-none')
    document.getElementById('ccs-company-cancel').classList.toggle('d-none')
    document.getElementById('ccs-company-field').classList.toggle('d-none')
    document.getElementById('ccs-company-form').classList.toggle('d-none')
  }

  if(company === null || company === '' || company === undefined){
    return (
      <Container fluid className='m-0 p-0'>
        <Navigation />
        <Container className='py-3 m-auto' style={{ transform: 'translateY(-65px)'}}>
        <Card className='p-5 text-dark bg-light' 
              style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.25)'}}>
          <h1>Loading...</h1>
        </Card>
        </Container>
      </Container>
    )
  }else{
    return (
      <Container fluid className='m-0 p-0'>
        <Navigation />
        <Container className='py-3 m-auto' style={{ transform: 'translateY(-65px)'}}>
          <Card className='p-5 text-light bg-light' 
              style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.25)'}}>
              <Row>
                  <Image 
                      fluid={true}
                      roundedCircle={true} 
                      src={`http://127.0.0.1:8000/storage/${company.logo}`}
                      style={{ width: '150px', height: '150px', padding: '0'}}  />
              </Row>
              <Row className='py-3'>
                <Col lg={{ span: 2, offset: 10}} className='btn-group'>
                  <Button 
                      variant='success' 
                      id='ccs-company-edit' 
                      className='w-25' 
                      onClick={toggleForm}
                  >Edit</Button>
                  <Button 
                      variant='success' 
                      id='ccs-company-save' 
                      className='w-25 d-none' 
                      type='submit' 
                      form='ccs-company-remote-submit' 
                      onClick={toggleForm}
                  >Save</Button>
                  <Button 
                      variant='danger' 
                      id='ccs-company-cancel' 
                      className='w-25 d-none' 
                      type='submit' 
                      onClick={toggleForm}
                  >Cancel</Button>
                </Col>
              </Row>
              <Row>
                <Col id='ccs-company-field'>
                  <Row>
                    <Col className='text-dark'>
                        <h3>Company Name</h3>
                        <p>{company.name}</p>
                        <h3>Contact Information</h3>
                        <p>{company.contact_information}</p>   
                        <h3>Email</h3>
                        <p>{company.email}</p>   
                        <h3>Address</h3>
                        <p>{company.address1} {company.address2} {company.city} {company.region} {company.country}</p>
                    </Col>
                    <Col className='text-dark'>
                        <h3>Company Description</h3>
                        <p>{company.description}</p>
                        <h3>Company Core Competencies</h3>
                        <ul>
                          <li>CC 1</li>
                          <li>CC 2</li>
                          <li>CC 3</li>
                        </ul>
                        <h3>Company Differentiators</h3>
                        <ul>
                          <li>CD 1</li>
                          <li>CD 2</li>
                          <li>CD 3</li>
                        </ul>
                        <h3>Company Certifications</h3>
                        <ul>
                          <li>CC 1</li>
                          <li>CC 2</li>
                          <li>CC 3</li>
                        </ul>
                    </Col>
                  </Row>
                </Col>
                <Col id='ccs-company-form' className='text-dark d-none'>
                  <FormCompany />
                </Col>
              </Row>
            </Card>
          </Container>
        </Container>
    )
  }
}

export default Company