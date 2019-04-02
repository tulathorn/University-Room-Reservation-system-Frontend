import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class AdLoginCard extends React.Component {

  render() {
    return (
        <div style={cardColor} className="jumbotron">
          <div className="row">
            <div className="col-md-10">
            </div>
            <div className="col-md-2">
              <a href="/login" class="text-secondary">{language[LanguageStore.lang].adLoginForm.User}</a>
            </div>
          </div>
          <h3 align="left" style={helpLink}>
          {language[LanguageStore.lang].adLoginForm.AdministratorLogin}
          </h3>
          <br/>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" style={helpLink}>{language[LanguageStore.lang].adLoginForm.Username}</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" style={helpLink}>{language[LanguageStore.lang].adLoginForm.Password}</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
          </form>
          <br/>
          <a href="/ad_all_list" className="btn btn-outline-info">{language[LanguageStore.lang].adLoginForm.Login}</a>
        </div>
    )
  }
}

export default AdLoginCard
