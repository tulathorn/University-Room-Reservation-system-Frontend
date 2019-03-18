import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SearchRecForm from '../Components/searchRecForm'
import styled from 'styled-components'
import Swal from 'sweetalert2'


const Title = styled.h1`
  color: #1f384b;
`

const jumbotronImage = require('../Pictures/bg.png');
const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundImage: `url(${jumbotronImage})`,
  backgroundSize: 'absolute'
}

class AdSearchRecView extends Component {
  searchClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Oops...',
      text: 'There are no matching rooms',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-6">
              <a href="/ad_search_nor" className="btn btn-outline-info btn-lg btn-block">Normal Booking</a>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>Recurring Booking</button>
            </div>
          </div>
          <br/>
          <center>
            <Title>Welcome to University Room Reservation System</Title>
          </center>
          <br/>
          <br/>
          <SearchRecForm/>
          <center>
            <button type="button" onClick={() => this.searchClick()} className="btn btn-outline-info">
              Search
            </button>
          </center>
        </div>
        <center>
          {/*<a href="/ad_rec_list">Go to room info(Temporary)</a>*/}
        </center>
      </div>
    )
  }
}

export default AdSearchRecView
