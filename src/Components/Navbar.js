import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const navColor = {
  backgroundColor: '#1F384B'
}


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

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={require("../Pictures/logo.png")} width="40" height="40" alt=""/>
        </a>
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
            <NavItem path="/" name={language[LanguageStore.lang].Navbar.FindRoom} />
            <NavDropdown name={language[LanguageStore.lang].Navbar.History}>
              <a className="dropdown-item" href="/curhistory">
                {language[LanguageStore.lang].Navbar.CurrentHistory}
              </a>
              <a className="dropdown-item" href="/prehistory">
                {language[LanguageStore.lang].Navbar.PreviousHistory}
              </a>
            </NavDropdown> 
            <NavItem path="/contact" name={language[LanguageStore.lang].Navbar.Help} />
            <NavDropdown name={language[LanguageStore.lang].Navbar.Languages}>
              <a className="dropdown-item" href="/">
                {language[LanguageStore.lang].Navbar.Thai}
              </a>
              <a className="dropdown-item" href="/">
                {language[LanguageStore.lang].Navbar.English}
              </a>
              {/* <div className="dropdown-divider" />
              <a className="dropdown-item" href="/">
                Something else here
              </a> */}
            </NavDropdown>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <NavItem name="580705034XX" disabled="true" />
            </ul>
            {/* <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <a href="/login" class="btn btn-sm btn-outline-info">{language[LanguageStore.lang].Navbar.Logout}</a>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar
