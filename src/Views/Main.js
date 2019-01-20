import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Title = styled.h1`
  color: #1F384B;
`

class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/><center><Title>Welcome to University Room Reservation System</Title></center>

            <div class="row">
              <div class="jumbotron">
                <h2>Find a Room</h2>

                <div class="row"></div>
                <div class="row"></div>
                <div class="row">
                  <h4>Filters :</h4><br/>
                  <div class="row">
                    <div class="col-sm">
                      One of three columns
                    </div>
                    <div class="col-sm">
                      One of three columns
                    </div>
                    <div class="col-sm">
                      One of three columns
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="row">
              <center><button type="button" class="btn btn-outline-dark">Search</button></center>
            </div>
        </div>
      </div>
    )
  }
}

export default MainView
