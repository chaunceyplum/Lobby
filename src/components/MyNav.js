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
import { useDispatch, useSelector, useRef } from 'react-redux'
import {
  loggedInBool,
  loggedInLoading,
  loggedInError,
  loggedInEmail,
  loggedInPassword,
  fetcher,
  emailGetter,
} from '../redux/LoggedInSlice'
import DisplayUser from './DisplayUser'

const MyNav = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
    console.log(isOpen)
  }

  const dispatch = useDispatch()
  const loggedInState = (state) => state.loggedIn
  const statey = useSelector(loggedInState)
  const password = useSelector(loggedInPassword)
  const loggedInBoolean = useSelector(loggedInBool)
  //const fetcher = useSelector(fetcher)
  return (
    <div className=''>
      {/* <Container>
        <Navbar fixed='top' className='text-center navbarPositoning'>
          <Col xs={6} lg={4}>
            <NavbarBrand href='/' className='text-secondary'>
              (logo)Lobby
            </NavbarBrand>
          </Col>
          <NavbarToggler onClick={toggle} className='navbar-toggler' />

          <Col
            xs={0}
            md={6}
            lg={4}
            className='text-center display-flex ms-auto'
          >
            {isOpen ? (
              <div className='navlinks'>
                <Nav className='ms-auto nav text-center '>
                  <NavItem>
                    <NavLink href='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/service'>Service</NavLink>
                  </NavItem>
                  {/* <NavItem>
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

          <Col xs={6} md={3} lg={4}>
            <div>
              <Button onClick={toggle} variant='outline-secondary'>
                menu
              </Button>
            </div>
          </Col>
        </Navbar>
      </Container> */}
      <Container>
        <Navbar
          expand='lg'
          fixed='top'
          className='text-center navbarPositoning'
        >
          <Container>
            <Button className=' btn btn-light'>
              <Navbar.Brand href='/' className='text-dark bg-light'>
                (logo)Lobby
              </Navbar.Brand>
            </Button>
            <Navbar.Toggle bg={'darkgrey'} />
            <Navbar.Collapse>
              <Nav
                className='me-auto my-2 my-lg-0 text-center nav d-flex center'
                style={{ maxHeight: '50%' }}
              >
                <NavItem>
                  <NavLink className='NavLink text-white' href='/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='NavLink text-white' href='/service'>
                    Service
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className='NavLink' href='/about'>
                    About Us
                  </NavLink>
                </NavItem> */}

                <NavItem>
                  <NavLink className='NavLink text-white' href='/contact'>
                    Contact
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='NavLink text-white' href='/login'>
                    Log In
                  </NavLink>
                </NavItem>
              </Nav>
              <div>
                {statey.loggedIn ? (
                  <h6 className='text-wwhite'>
                    `welcome to Lobby, ${statey.email}`
                  </h6>
                ) : (
                  <SignUp />
                )}
                {/* {loggedInBoolean
                  ? console.log(loggedInBoolean)
                  : console.log('no')} */}

                {
                  //<DisplayUser email={statey.email} />
                }
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNav
