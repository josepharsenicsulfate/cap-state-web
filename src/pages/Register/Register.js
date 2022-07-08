import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [ show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleClose = () => {
        setShow(false)
        navigate('/login')
    }

    const handleShow = () => {
        setShow(true)
    }

    const [ validated, setValidated ] = useState(false)
    const [ formData, updateFormData ] = useState('')

    const handleChange = async (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        if(form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
        register(JSON.stringify(formData))
        handleShow()
    }

    const register = (creds) => {

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: creds,
            redirect: 'follow'
        }
          
        fetch("http://127.0.0.1:8000/api/v1/auth/register", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error))
    }

    return (
        <Container className='p-0 text-center'>
            <Modal 
                show={show} 
                onHide={handleClose} 
                backdrop='static' 
                keyboard={false} 
                centered>
                <Modal.Header>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>Registered successfully</Modal.Body>
                <Modal.Footer><Button onClick={handleClose}>Back to login</Button></Modal.Footer>
            </Modal>
            <Row className='mx-0 py-5 justify-content-center' style={{ height: '100vh'}}>
                <Col 
                    className='p-5 align-self-center' 
                    xs={10} md={7} lg={4} 
                    style={{ boxShadow: '5px 5px 10px 1px hsla(240, 4%, 13%, 0.5)' }}>
                    <Form className='p-0 m-auto' validated={validated} onSubmit={handleSubmit}>
                        <h3 className='mb-5'>Create an Account</h3>
                        <Form.Control className='my-3 mx-auto' onChange={handleChange} name='email' required placeholder='Email Address' />
                        <Form.Control className='my-3 mx-auto' onChange={handleChange} name='password' required type='password' placeholder='Password' />
                        <Form.Control className='my-3 mx-auto' onChange={handleChange} name='password_confirmation' required type='password' placeholder='Confirm Password' />
                        <Button className='px-5 mt-5' type='submit'>Register</Button>
                        <Link to='/login' className='mt-3 d-block'>Already have an account?</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register