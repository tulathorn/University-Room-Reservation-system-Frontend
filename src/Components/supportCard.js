import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`

class SupCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">
          <div className="row">
            <div className="col-6">
              Email
            </div>
            <div className="col-6" align="right">
              Time
            </div>
          </div>
        </h5>

        <div className="card-body">
         <h5 className="card-title">
           Title
         </h5>
         <p className="card-text">
           Some quick example text to build on the card title and make up the bulk of the card's content.
         </p>
         <div className="row">
           <div className="col-12 col-md-11">
           </div>
           <div className="col-6 col-md-1">
            <a href="/ad_reply" className="btn btn-outline-info" target="_blank">Reply</a>
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SupCard
