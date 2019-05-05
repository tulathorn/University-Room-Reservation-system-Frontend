import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'
import { withRouter } from 'react-router-dom'
import axios from '../Utils/axiosConfig'
import UserStore from '../stores/UserStore'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class AdLoginCard extends React.Component {
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
      localStorage.setItem('UserID', response.data.UserID+'')
      localStorage.setItem('username', response.data.UsernameID)
      localStorage.setItem('firstname', response.data.FirstName)
      localStorage.setItem('lastname', response.data.LastName)
      localStorage.setItem('email', response.data.EmailAddress)
      UserStore.checkAdmin()
      // if(parseInt(localStorage.IsAdmin)){
      //   window.alert('Admin')
      // }
      // else{
      //   window.alert('This user is not an admin')
      // }
      //this.props.history.push('/ad_all_list')
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
            <div className="col-md-10">
            </div>
            <div className="col-md-2">
              <a href="/login" className="text-secondary">{language[localStorage.getItem('language')].adLoginForm.User}</a>
            </div>
          </div>
          <h3 align="left" style={helpLink}>
          {language[localStorage.getItem('language')].adLoginForm.AdministratorLogin}
          </h3>
          <br/>





          <form onSubmit={e => this.login(e)}>
          <div className="form-group">
            <label for="username" style={helpLink}>{language[localStorage.getItem('language')].loginForm.Username}</label>
            <input type="text" ref={this.inputUsername} className="form-control" id="username"
            placeholder={language[localStorage.getItem('language')].Additional.EnterUsername}/>
          </div>
          <div className="form-group">
            <label for="password" style={helpLink}>{language[localStorage.getItem('language')].adLoginForm.Password}</label>
            <input type="password" ref={this.inputPassword} className="form-control" id="password"
            placeholder={language[localStorage.getItem('language')].loginForm.Password}/>
          </div>
          <button type="submit" className="btn btn-outline-info">{language[localStorage.getItem('language')].adLoginForm.Login}</button>
        </form>
              
        </div>
    )
  }
}

export default withRouter(AdLoginCard)
