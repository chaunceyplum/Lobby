import React from 'react'
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
} from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import LogIn from './LogIn'
import SignUp from './SignUp'

const MyNav = () => {
  return (
    <div className='navbarPositoning'>
      <Container>
        <Navbar sticky='top' className='text-center'>
          <Col xs={3}>
            <NavbarBrand>(logo)Lobby</NavbarBrand>
          </Col>

          <Col xs={6}>
            <Nav className='ms-auto nav text-center'>
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
          </Col>

          <Col xs={3}>
            <Form className='d-flex text-center'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='transparent'>
                <FiSearch />
              </Button>
            </Form>
          </Col>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNav
