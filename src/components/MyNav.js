import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
} from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { NavbarToggler } from 'reactstrap'
import LogIn from './LogIn'
import SignUp from './SignUp'

const MyNav = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className=''>
      <Container>
        <Navbar fixed='top' className='text-center navbarPositoning'>
          <Col xs={3}>
            <NavbarBrand href='/' className='text-secondary'>
              (logo)Lobby
            </NavbarBrand>
          </Col>
          <NavbarToggler onClick={toggle} />

          <Col xs={0} md={6}>
            {isOpen ? (
              <div>
                <Nav className='ms-auto nav text-center '>
                  <NavItem>
                    <NavLink href='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/service'>Service</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/about'>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/contact'>Contact</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href='/login'>Log In</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink>
                      <SignUp />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            ) : (
              <div></div>
            )}
          </Col>

          <Col xs={3}>
            <div>
              <Button onClick={toggle} variant='outline-secondary'>
                menu
              </Button>
            </div>
          </Col>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNav
