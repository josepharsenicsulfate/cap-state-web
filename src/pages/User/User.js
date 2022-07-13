import React, { useState, useEffect } from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FormUser from '../../components/Forms/FormUser'
import Navigation from '../../components/Navigation/Navigation'

function User() {
    const navigate = useNavigate()
    const [ loggedUser, setLoggedUser ] = useState('')
  
    useEffect(() => {
      const session = JSON.parse(sessionStorage.getItem('user'))
      session ? setLoggedUser(session) : navigate('/login')
    }, [navigate])

    const get = () => {
        var myHeaders = new Headers()
        myHeaders.append("Accept", "application/json")
        myHeaders.append("Content-Type", "application/json")
        // myHeaders.append("Authorization", "Bearer " + user.token)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }

        fetch("http://127.0.0.1:8000/api/v1/user", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => console.log(result.results))
        .catch(error => console.log('error', error))
    }

    const toggleForm = () => {
        document.getElementById('ccs-user-field').classList.toggle('d-none')
        document.getElementById('ccs-user-form').classList.toggle('d-none')
        document.getElementById('ccs-user-edit').classList.toggle('d-none')
        document.getElementById('ccs-user-save').classList.toggle('d-none')
        document.getElementById('ccs-user-cancel').classList.toggle('d-none')
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
                                id='ccs-user-edit' 
                                className='w-25' 
                                onClick={toggleForm}
                            >Edit</Button>
                            <Button 
                                variant='success' 
                                id='ccs-user-save' 
                                className='w-25 d-none' 
                                type='submit' 
                                form='ccs-user-remote-submit' 
                                onClick={toggleForm}
                            >Save</Button>
                            <Button 
                                variant='danger' 
                                id='ccs-user-cancel' 
                                className='w-25 d-none' 
                                type='submit' 
                                form='ccs-user-remote-submit' 
                                onClick={toggleForm}
                            >Cancel</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='ccs-user-field' className='text-dark'>
                            <h3>Name</h3>
                            <p>John Doe</p>
                            <h3>Mobile</h3>
                            <p>0929456789123</p>   
                            <h3>Email</h3>
                            <p>john_doe@gmail.com</p>   
                            <h3>Address</h3>
                            <p>Random St., Florida, USA</p>
                            {/* <Image src={test} /> */}
                        </Col>
                        <Col id='ccs-user-form' className='text-dark d-none' lg={{ span: 5, offset: 2}}>
                            <FormUser />
                        </Col>
                    </Row>
                </Card>
            </Container>
        </Container>
    )
}

export default User