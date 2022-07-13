import React, { useEffect, useState } from 'react'
import { Container, Button, Image, Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FormCompany from '../../components/Forms/FormCompany'
import Navigation from '../../components/Navigation/Navigation'

function Company() {
  const navigate = useNavigate()
  const [ loggedUser, setLoggedUser ] = useState('')

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('user'))
    session ? setLoggedUser(session) : navigate('/login')
  }, [navigate])

  const toggleForm = (e) => {
    console.log(e)
    document.getElementById('ccs-company-edit').classList.toggle('d-none')
    document.getElementById('ccs-company-save').classList.toggle('d-none')
    document.getElementById('ccs-company-field').classList.toggle('d-none')
    document.getElementById('ccs-company-form').classList.toggle('d-none')
  }

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
                    src='http://127.0.0.1:8000/storage/profile_picture/userId-2.png'
                    style={{ width: '150px'}}  />
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
              </Col>
            </Row>
            <Row>
              <Col id='ccs-company-field'>
                <Row>
                  <Col className='text-dark'>
                      <h3>Company Name</h3>
                      <p>John Doe</p>
                      <h3>Contact Information</h3>
                      <p>0929456789123</p>   
                      <h3>Email</h3>
                      <p>john_doe@gmail.com</p>   
                      <h3>Address</h3>
                      <p>Random St., Florida, USA</p>
                  </Col>
                  <Col className='text-dark'>
                      <h3>Company Description</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime?</p>
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
              <Col id='ccs-company-form' className='text-dark d-none' lg={{ span: 5, offset: 2}}>
                <FormCompany />
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
  )
}

export default Company