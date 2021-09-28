import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.svg'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top text-info logo"
            />{' '}
            NewsInfinity
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/business">
              <Nav.Link>Bussiness</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/entertainment">
              <Nav.Link>Entertainment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/general">
              <Nav.Link>General</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/health">
              <Nav.Link>Health</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/science">
              <Nav.Link>Science</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sports">
              <Nav.Link>Sports</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/technology">
              <Nav.Link>Technology</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
