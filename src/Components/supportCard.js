import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'



class SupCard extends React.Component {
  replyClick = e => {
    e.preventDefault()
    localStorage.setItem('ContactID',this.props.data.ContactID)
    window.location = "/ad_reply";
  }
  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">
            <div className="row">
              <div className="col-6">
                {this.props.data.EmailAddress}
              </div>
              <div className="col-6" align="right">
              {this.props.data.DateTime}
              </div>
            </div>
          </h5>

          <div className="card-body">
          <h5 className="card-title">
          {this.props.data.Title}
          </h5>
          <p className="card-text">
            {this.props.data.Detail}
          </p>
          <div className="row">
            <div className="col-12 col-md-11">
            </div>
            <div className="col-6 col-md-1">
              <button onClick={(e) => this.replyClick(e)} type="button" className="btn btn-outline-info">
                {language[LanguageStore.lang].supportCard.Reply}
              </button>
            </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

export default SupCard
