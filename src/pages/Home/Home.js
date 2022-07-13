import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Navigation from '../../components/Navigation/Navigation'
import FieldCCS from '../../components/FieldCCS/FieldCCS'

function Home() {
  const navigate = useNavigate()
  const [ loggedUser, setLoggedUser ] = useState('')

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('user'))
    session ? setLoggedUser(session) : navigate('/login')
  }, [navigate])

  return (
    <Container fluid className='m-0 p-0'>
      <Navigation />
      <Container className='py-3 m-auto' style={{ transform: 'translateY(-65px)'}}>
        <Card className='p-5 text-light bg-light' style={{ boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)'}}>
          <Row className='py-3'>
            <Col lg={{ offset: 2, span: 8}}>
              <FieldCCS />
            </Col>
          </Row>
        </Card>
      </Container>
    </Container>
  )
}

export default Home