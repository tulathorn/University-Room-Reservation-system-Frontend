import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h1`
  color: #1F384B;
`
class SupPreview extends React.Component {
  render() {
    return (
      <div>
      <Title>{this.props.data.Title}</Title>
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
         <p className="card-text">
         {this.props.data.Detail}
          </p>
        </div>
      </div>
      </div>
    )
  }
}

export default SupPreview
