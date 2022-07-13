import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function FieldCCS() {

  const download = (e) => {
    e.preventDefault()
    const tarElement = document.querySelector('.download-ccs')
    const base_width = tarElement.offsetWidth
    const base_height = tarElement.offsetHeight
    const domElement = tarElement
    html2canvas(domElement)
    .then((canvas) => {
      const px2in = 0.0104166667
      const size = {
        width: base_width*px2in,
        height: base_height*px2in
      }
      const img = canvas.toDataURL('image/jpeg')
      const pdf = new jsPDF('p', 'in', [size.width, size.height])
      pdf.addImage(img, 'JPEG', 0, 0, size.width, size.height)
      pdf.save('test-ccs.pdf')
    })
  }

  return (
    <>
      <Card className='text-dark p-5 download-ccs bg-light'
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
      <Container>
        <Row className='justify-content-center'>
          <Button variant='success' className='mt-5 w-25' onClick={download}>Download</Button>
        </Row>
      </Container>
    </>

  )
}

export default FieldCCS