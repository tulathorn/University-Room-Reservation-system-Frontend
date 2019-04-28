import React from 'react'
import { observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'



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

@observer
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

@observer
class Navbar extends React.Component {
  logoutClick = () => {
    localStorage.clear()
    localStorage.setItem('language',0)
    window.location = "/login"
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
        <NavLink className="navbar-brand" to="/">
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
            <NavItem path="/" name={language[localStorage.getItem('language')].Navbar.FindRoom} />
            <NavDropdown name={language[localStorage.getItem('language')].Navbar.History}>
              <NavLink to="/curhistory" className="dropdown-item">
                {language[localStorage.getItem('language')].Navbar.CurrentHistory}
              </NavLink>
              <NavLink to="/prehistory" className="dropdown-item">
                {language[localStorage.getItem('language')].Navbar.PreviousHistory}
              </NavLink>
            </NavDropdown>
            <NavItem path="/contact" name={language[localStorage.getItem('language')].Navbar.Help} />
            <NavDropdown name={language[localStorage.getItem('language')].Navbar.Languages}>
              <div className="dropdown-item" onClick={() => this.langEN()}>
                {' '}
                {language[localStorage.getItem('language')].Navbar.English}
              </div>
              <div className="dropdown-item" onClick={() => this.langTH()}>
                {' '}
                {language[localStorage.getItem('language')].Navbar.Thai}
              </div>
            </NavDropdown>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <NavItem name={localStorage.getItem('username')} disabled="true" />
            </ul>
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

export default Navbar
