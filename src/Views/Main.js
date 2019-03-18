import React, { Component } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'

import Navbar from '../Components/Navbar'

import ReservationForm from '../Components/ReservationForm'
import { Consumer as RoomConsumer } from '../Components/RoomDataProvider'

const Title = styled.h1`
  color: #1f384b;
`

class MainView extends Component {
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
  constructor(props){
    super(props)
    this.state = {
      SearchData: []
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <center>
            <Title>Welcome to University Room Reservation System</Title>
          </center>
          <br />

          <RoomConsumer>{state => <ReservationForm {...state} />}</RoomConsumer>

          <center>
            <button type="button" className="btn btn-outline-info" onClick={() => this.searchClick()}  >
              Search
            </button><br/>
          {/*<a href="/list">Go to list page(Temporary)</a>*/}
          </center>
        </div>
      </div>
    )
  }
}

export default MainView
