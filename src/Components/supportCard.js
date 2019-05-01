import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'
import moment from 'moment'


class SupCard extends React.Component {
  replyClick = e => {
    e.preventDefault()
    localStorage.setItem('ContactID',this.props.data.ContactID)
    localStorage.setItem('contactemail',this.props.data.EmailAddress)
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
              {moment(this.props.data.DateTime.slice(0,19)+'-07:00').format('dddd, DD/MM/YYYY, HH:mm:ss')}
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
            <div className="col-md-9 col-sm-12">
            </div>
            <div className="col-md-3 col-sm-12">
              <button onClick={(e) => this.replyClick(e)} type="button" className="btn btn-outline-info">
                {language[localStorage.getItem('language')].supportCard.Reply}
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
