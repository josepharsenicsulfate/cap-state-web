import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'

function FieldCCS() {

  return (
    <Card className='text-dark p-5 download-ccs'
      style={{boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)'}}>
      <Container className='p-0 m-0'>
        <Row className='text-end'>
          <h3>Logo</h3>
          <h6>Company Name</h6>
        </Row>
        <Row className='text-center py-3'>
          <h1>Capability Statement</h1>
        </Row>
        <Row>
          <h3>About Company Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi quo hic, quasi perspiciatis explicabo vel, quibusdam, nulla repellendus at voluptatibus adipisci culpa autem. Maiores.</p>
        </Row>
        <Row>
          <Col>
            <ul>
              <h5>Core Competencies</h5>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h5>Past Performances</h5>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <h5>Codes and Certificates</h5>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h5>Codes and Certificates</h5>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default FieldCCS