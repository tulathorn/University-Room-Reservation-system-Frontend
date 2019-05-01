import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'

import { NavLink } from 'react-router-dom'

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = props.path === pageURI ? 'nav-item active' : 'nav-item'
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link'
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? <span className="sr-only">(current)</span> : ''}
      </a>
    </li>
  )
}

class NavDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
  }
  showDropdown(e) {
    e.preventDefault()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            this.showDropdown(e)
          }}
        >
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/ad_all_list">
          <img src={require('../Pictures/logo.png')} width="40" height="40" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavDropdown name={language[localStorage.getItem('language')].adNavbar.SearchRoom}>
              <NavLink to="/ad_search_nor" className="dropdown-item">
                {language[localStorage.getItem('language')].adNavbar.NormalSearch}
              </NavLink>
              <NavLink to="/ad_search_rec" className="dropdown-item">
                {language[localStorage.getItem('language')].adNavbar.RecurringSearch}
              </NavLink><div className="dropdown-divider" />
              <NavLink to="/ad_all_list" className="dropdown-item">
                {language[localStorage.getItem('language')].adNavbar.RoomSearch}
              </NavLink>
            </NavDropdown>
            <NavItem path="/ad_search" name="" />
            <NavItem path="/ad_curhistory" name={language[localStorage.getItem('language')].adNavbar.History} />
            <NavItem path="/ad_add_room" name={language[localStorage.getItem('language')].adNavbar.AddRoom} />
            <NavItem path="/ad_support" name={language[localStorage.getItem('language')].adNavbar.Support} />
            <NavDropdown name={language[localStorage.getItem('language')].adNavbar.Languages}>
              <div className="dropdown-item" onClick={() => this.langEN()}>
                {' '}
                {language[localStorage.getItem('language')].adNavbar.English}
              </div>
              <div className="dropdown-item" onClick={() => this.langTH()}>
                {' '}
                {language[localStorage.getItem('language')].adNavbar.Thai}
              </div>
            </NavDropdown>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <NavLink
              className="btn btn-sm btn-outline-info"
              onClick={() => this.logoutClick()}
            >
              {language[localStorage.getItem('language')].Navbar.Logout}
            </NavLink>
          </form>

          
        </div>
      </nav>
    )
  }
}

export default AdNavbar
