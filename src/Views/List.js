import React, { Component } from 'react'

import { Consumer as RoomConsumer } from '../Components/RoomDataProvider'
import Navbar from '../Components/Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class ListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      SearchData: {}
    }
  }

  componentDidMount() {
    let fechData = axios.get('/rooms', {
      params: {
        RoomName: 'CB1402'
      }
    })
    this.setState({
      SearchData: fechData
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>Result : 1</p>
            </div>
            <div className="col-8" />
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <b>Search For : </b>
              </p>
              <p>Building : Witsawa Watthana</p>
              <p>Size : 60 People</p>
              <p>Date : Monday 12 November 2018</p>
              <p>From 13:30 to 17:30</p>
            </div>
            <div className="col-8">
              <p>
                <b>Filtered : </b>
              </p>
            </div>
          </div>

          <RoomConsumer>
            {state =>
              state.rooms.map(room => (
                <div className="jumbotron text-white" style={jumbotronStyle} key={room.RoomName}>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <center>
                        <img src={require('../Pictures/testclassroom.jpg')} height="150" alt="" />
                      </center>
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="row">
                        <h4>{room.RoomName}</h4>
                      </div>
                      <div className="row">
                        <p>
                          <b>Building: </b>
                        </p>
                        <p>{room.Building}</p>
                      </div>
                      <div className="row">
                        <p>
                          <b>Floor: </b>
                        </p>
                        <p>{room.Floor}</p>
                      </div>
                      <div className="row">
                        <p>
                          <b>Size: </b>
                        </p>
                        <p>{room.PeopleCapacity} Peoples</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="button" className="btn btn-danger btn-lg btn-block" disabled>
                        Not Completed
                      </button>
                      <button type="button" className="btn btn-info btn-lg btn-block" disabled>
                        Completed
                      </button>
                      <button type="button" className="btn btn-warning btn-lg btn-block" disabled>
                        Canceled
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </RoomConsumer>

          <center>
            <a href="/booking">Go to booking page(Temporary)</a>
          </center>
        </div>
      </div>
    )
  }
}

export default ListView
