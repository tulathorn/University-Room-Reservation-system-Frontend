import React from 'react'
import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap/'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'

const history = createBrowserHistory()

class UserNavbar extends React.Component {
  logoutClick = props => {
    localStorage.clear()
    localStorage.setItem('language', 0)
    // Listen for changes to the current location.
    // window.location = '/login'
    history.replace('/login')
    // window.location.reload()
  }

  langEN = () => {
    localStorage.setItem('language', 0)
    window.location.reload()
  }

  langTH = () => {
    localStorage.setItem('language', 1)
    window.location.reload()
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={require('../Pictures/logo.png')}
            width="40"
            height="40"
            alt="RoomReservationLOGO"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              {language[localStorage.getItem('language')].Navbar.FindRoom}
            </Nav.Link>
            <NavDropdown
              title={language[localStorage.getItem('language')].Navbar.History}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/curhistory">
                {language[localStorage.getItem('language')].Navbar.CurrentHistory}
              </NavDropdown.Item>
              <NavDropdown.Item href="/prehistory">
                {language[localStorage.getItem('language')].Navbar.PreviousHistory}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">
              {language[localStorage.getItem('language')].Navbar.Help}
            </Nav.Link>
            <NavDropdown
              title={language[localStorage.getItem('language')].Navbar.Languages}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => this.langEN()}>
                {language[localStorage.getItem('language')].Navbar.English}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.langTH()}>
                {language[localStorage.getItem('language')].Navbar.Thai}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-2">
            <Navbar.Text>{localStorage.getItem('username')}</Navbar.Text>
          </Nav>
          <Button
            variant="btn btn-sm btn-outline-info"
            onClick={e => {
              this.logoutClick()
            }}
          >
            {language[localStorage.getItem('language')].Navbar.Logout}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(UserNavbar)
