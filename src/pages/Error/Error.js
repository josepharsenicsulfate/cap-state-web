import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Error() {
  return (
    <Container className='p-0 text-center'>
        <Row 
            className='mx-0 py-5 justify-content-center' 
            style={{ height: '100vh'}}>
            <Col 
                className='p-5 align-self-center' 
                xs={10} md={7} lg={4} 
                style={{ boxShadow: '5px 5px 10px 1px hsla(240, 4%, 13%, 0.5)' }}>
                <h3>Error: Page not found</h3>
                <Link to='/login'>Back to login</Link>
            </Col>
        </Row>
    </Container>
  )
}

export default Error