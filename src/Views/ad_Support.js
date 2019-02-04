import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`

class AdSupportView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>Support</Title><br/>
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
             <h5 className="card-title">Title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

             <div className="row">
               <div className="col-12 col-md-11">
               </div>
               <div className="col-6 col-md-1">
                <a href="/ad_reply" className="btn btn-outline-dark">Reply</a>
                 
               </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AdSupportView
