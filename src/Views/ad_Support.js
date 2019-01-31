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
          <div class="card">

            <h5 class="card-header">
              <div class="row">
                <div class="col-6">
                  Email
                </div>
                <div class="col-6" align="right">
                  Time
                </div>
              </div>
            </h5>

            <div class="card-body">
             <h5 class="card-title">Title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

             <div class="row">
               <div class="col-12 col-md-11">
               </div>
               <div class="col-6 col-md-1">
                 <a href="#" class="btn btn-outline-dark">Reply</a>
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
