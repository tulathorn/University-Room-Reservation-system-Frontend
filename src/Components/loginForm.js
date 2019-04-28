import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
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
      //localStorage.setItem('','')
      //console.log(response)
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
