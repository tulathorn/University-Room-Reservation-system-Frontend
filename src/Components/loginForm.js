import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'
import { withRouter } from 'react-router-dom'
import axios from '../Utils/axiosConfig'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class LoginCard extends React.Component {
  constructor(props) {
    super(props)
    this.inputUsername = React.createRef()
    this.inputPassword = React.createRef()
    this.state = {
      login: false
    }
  }

  

  login = async e => {
    e.preventDefault()
    // console.log(this.inputUsername)
    // console.log(this.inputPassword)
    try {
      const response = await axios.post('/auth', {
        username: this.inputUsername.current.value,
        password: this.inputPassword.current.value
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('UserID', response.data.UserID.toString())
      localStorage.setItem('username', response.data.UsernameID)
      localStorage.setItem('firstname', response.data.FirstName)
      localStorage.setItem('lastname', response.data.LastName)
      localStorage.setItem('email', response.data.EmailAddress)
      
      console.log(this.props)
      this.props.history.push('/')
    } catch (err) {
      console.log({ err })
      if (err.response && err.response.status === 401) {
        window.alert('Invalid username or password')
      } else {
        window.alert('Unknown error \n' + err)
      }
    }
  }

  render() {
    return (
      <div style={cardColor} className="jumbotron">
        <div className="row">
          <div className="col-md-8 col-sm-8" />
          <div className="col-md-4 col-sm-4">
            <a href="/ad_login" className="text-secondary">
              {language[localStorage.getItem('language')].loginForm.Admin}
            </a>
          </div>
        </div>
        <br />

        <h3 align="left" style={helpLink}>
          {language[localStorage.getItem('language')].loginForm.Title1}
          <br />
          {language[localStorage.getItem('language')].loginForm.Title2}
        </h3>
        <br />

        <form onSubmit={e => this.login(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1" style={helpLink}>
              {language[localStorage.getItem('language')].loginForm.Username}
            </label>
            <input
              type="text"
              ref={this.inputUsername}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={language[localStorage.getItem('language')].Additional.EnterUsername}
            />
            <small id="emailHelp" className="form-text text-muted">
              {language[localStorage.getItem('language')].loginForm.UsernameDef}
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1" style={helpLink}>
              {language[localStorage.getItem('language')].loginForm.Password}
            </label>
            <input
              type="password"
              ref={this.inputPassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder={language[localStorage.getItem('language')].loginForm.Password}
            />
          </div>
          <button type="submit" className="btn btn-outline-info">
            {language[localStorage.getItem('language')].loginForm.Login}
          </button>
        </form>

        <br />

        <div className="row">
          <div className="col-md-2">
            
          </div>

          <div className="col-md-8" />
          <div className="col-md-2">
            <a href="/contact" className="text-info">
              {language[localStorage.getItem('language')].loginForm.Help}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginCard)
