import React from 'react'
import { Nav, Navbar, Container, Popover, OverlayTrigger, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeGlobalUser } from '../../utilities/UserContext'

function Navigation() {

  const removeUser = () => {
    removeGlobalUser()
  }

  const popover = (
    <Popover id="profile-popover">
      <Popover.Body 
        className='bg-light p-0' 
        style={{borderRadius: '75px'}}>
        <Nav.Link 
          as={Link} 
          className='d-block text-dark' 
          to='/user'>View Profile</Nav.Link>
        <Nav.Link 
          as={Link} 
          className='d-block text-dark' 
          to='/login'
          onClick={removeUser}
          >Logout</Nav.Link>
      </Popover.Body>
    </Popover>
  )

  const toggle = () => {
    document.getElementById('navImage').style.cursor = 'pointer'
  }

  return (
    <Container fluid className='const-bg p-0 m-0'>
      <Container className='py-3 m-auto'>
        <Row>
        <Navbar 
          expand="lg">
          <OverlayTrigger 
            trigger="click" 
            placement="right" 
            overlay={popover}>
            <Image
              onMouseEnter={toggle}
              id='navImage'
              roundedCircle={true} 
              src='http://127.0.0.1:8000/storage/profile_picture/userId-1.png' 
              style={{width: '50px'}} />
          </OverlayTrigger>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'/>
          <Navbar.Collapse className='justify-content-end text-center'>
              <Nav.Link 
                className='text-light' 
                as={Link} 
                to='/home'>Home</Nav.Link>
              <Nav.Link 
                className='text-light' 
                as={Link} 
                to='/company'>Company</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
          <Row className='mt-3 mb-5 mx-auto justify-content-center text-light'>
            <Col xs={11} lg={8}>
              <h1 className='text-center'>Capability Statement Generator</h1>
              <p className='text-center' id='intro-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque, natus quos, obcaecati, cumque saepe quae sunt nesciunt culpa et ducimus dolorem delectus incidunt consequatur.</p>
            </Col>
            
          </Row>
        </Row>
      </Container>
    </Container>
  )
}

export default Navigation