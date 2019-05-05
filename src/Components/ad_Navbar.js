import React from 'react'
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap/'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'


class AdNavbar extends React.Component {
  logoutClick = () => {
    localStorage.clear()
    localStorage.setItem('language',0)
    window.location = "/ad_login"
  }

  langEN = () => {
    localStorage.setItem('language',0)
    window.location.reload()
  }

  langTH = () => {
    localStorage.setItem('language',1)
    window.location.reload()
  }
  
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/ad_all_list"><img src={require('../Pictures/logo.png')} width="40" height="40" alt="RoomReservationLOGO"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={language[localStorage.getItem('language')].adNavbar.SearchRoom} id="basic-nav-dropdown">
              <NavDropdown.Item href="/ad_search_nor">{language[localStorage.getItem('language')].adNavbar.NormalSearch}</NavDropdown.Item>
              <NavDropdown.Item href="/ad_search_rec">{language[localStorage.getItem('language')].adNavbar.RecurringSearch}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ad_all_list">{language[localStorage.getItem('language')].adNavbar.RoomSearch}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={language[localStorage.getItem('language')].adNavbar.History} id="basic-nav-dropdown">
              <NavDropdown.Item href="/ad_curhistory">{language[localStorage.getItem('language')].Navbar.CurrentHistory}</NavDropdown.Item>
              <NavDropdown.Item href="/ad_prehistory">{language[localStorage.getItem('language')].Navbar.PreviousHistory}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ad_add_room">{language[localStorage.getItem('language')].adNavbar.AddRoom}</Nav.Link>
            <Nav.Link href="/ad_support">{language[localStorage.getItem('language')].adNavbar.Support}</Nav.Link>
            <NavDropdown title={language[localStorage.getItem('language')].Navbar.Languages} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.langEN()}>{language[localStorage.getItem('language')].adNavbar.English}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.langTH()}>{language[localStorage.getItem('language')].adNavbar.Thai}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-2">
            <Button variant="btn btn-sm btn-outline-info" onClick={() => this.logoutClick()}>{language[localStorage.getItem('language')].Navbar.Logout}</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


         
    )
  }
}

export default AdNavbar
