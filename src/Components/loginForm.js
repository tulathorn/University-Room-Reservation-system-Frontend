import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

import { withRouter } from 'react-router-dom'

import axios from '../Utils/axiosConfig'
import { from } from 'rxjs'

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

  loginClick = () => {
    Swal.fire({
      title: 'User Information',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="First Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Last Name">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Email Address">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Phone Number">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      confirmButtonColor: '#17a2b8',
      confirmButtonText: 'Login',
      cancelButtonColor: '#dc3545',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    }).then(result => {
      if (result.value) {
        // Go to main page
      }
    })
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
      localStorage.setItem('username', response.data.username)
      // console.log(response)
      // console.log(this.props)
      this.props.history.push('/')
    } catch (err) {
      console.log({ err })
      if (err.response && err.response.status === 401) {
        window.alert('Invalid username or passowrd')
      } else {
        window.alert('Unknow error \n' + err)
      }
    }
  }

  render() {
    return (
      <div style={cardColor} className="jumbotron">
        <div className="row">
          <div className="col-md-8 col-sm-8" />
          <div className="col-md-4 col-sm-4">
            <a href="/ad_login" class="text-secondary">
              {language[LanguageStore.lang].loginForm.Admin}
            </a>
          </div>
        </div>
        <br />

        <h3 align="left" style={helpLink}>
          {language[LanguageStore.lang].loginForm.Title1}
          <br />
          {language[LanguageStore.lang].loginForm.Title2}
        </h3>
        <br />

        <form onSubmit={e => this.login(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1" style={helpLink}>
              {language[LanguageStore.lang].loginForm.Username}
            </label>
            <input
              type="text"
              ref={this.inputUsername}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
            <small id="emailHelp" className="form-text text-muted">
              {language[LanguageStore.lang].loginForm.UsernameDef}
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1" style={helpLink}>
              {language[LanguageStore.lang].loginForm.Password}
            </label>
            <input
              type="password"
              ref={this.inputPassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-outline-info">
            {language[LanguageStore.lang].loginForm.Login}
          </button>
        </form>

        <br />

        <div className="row">
          <div className="col-md-2">
            {/*<a href="/" className="btn btn-outline-info">Login</a>*/}
            {/* <button onClick={() => this.loginClick()} type="button" className="btn btn-outline-info">{language[LanguageStore.lang].loginForm.Login}</button> */}
          </div>

          <div className="col-md-8" />
          <div className="col-md-2">
            <a href="/contact" class="text-info">
              {language[LanguageStore.lang].loginForm.Help}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginCard)
