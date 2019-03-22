import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Swal from 'sweetalert2'

import Navbar from '../Components/Navbar'

import RoomStore from '../stores/RoomStore'
import ReservationForm from '../Components/ReservationForm'

const Title = styled.h1`
  color: #1f384b;
`
@observer
class MainView extends Component {
  searchClick = () => {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Oops...',
      text: 'There are no matching rooms',
      showConfirmButton: false,
      timer: 1500
    })
  }
  constructor(props) {
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

          <ReservationForm />
          <center>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => this.searchClick()}
            >
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
