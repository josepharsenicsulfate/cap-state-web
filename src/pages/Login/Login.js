import React, { useState, useContext } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import { UserContext } from '../../utilities/UserContext'
import { setGlobalUser } from '../../utilities/UserContext'

function Login() {

    const navigate = useNavigate()

    // const { setUserToken } = useContext(UserContext)

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
        login(JSON.stringify(formData))
    }

    const login = (creds) => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: creds,
            redirect: 'follow'
        }
      
        fetch("http://127.0.0.1:8000/api/v1/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => 
                result.error ? loginNotOK(): loginOK(result.accessToken))
            .catch(error => console.log(error))
    }

    const loginOK = (token) => {
        sessionStorage.setItem('token', token)
        setGlobalUser(true)
        navigate('/home')
    }

    const loginNotOK = () => {
        alert('Invalid credentials')
        setValidated(false)
    }

    return (
        <Container className='p-0 text-center'>
            <Row 
                className='mx-0 py-5 justify-content-center' 
                style={{ height: '100vh'}}>
                <Col 
                    className='p-5 align-self-center' 
                    xs={10} md={7} lg={4} 
                    style={{ boxShadow: '5px 5px 10px 1px hsla(240, 4%, 13%, 0.5)' }}>
                    <Form className='p-0 m-auto' validated={validated} onSubmit={handleSubmit}>
                        <h3 className='mb-5'>Sign In</h3>
                        <Form.Control className='my-3 mx-auto' onChange={handleChange} name='email' placeholder='Email Address' required/>
                        <Form.Control className='my-3 mx-auto' onChange={handleChange} name='password' placeholder='Password' type='password' required/>
                        <Button className='px-5 mt-5' type='submit'>Login</Button>
                        <Link to='/register' className='mt-3 d-block'>Don't have an account yet?</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login