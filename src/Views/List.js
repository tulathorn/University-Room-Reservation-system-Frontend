import React, { Component } from 'react'
import RoomStore from '../stores/RoomStore'

import Navbar from '../Components/Navbar'
import { observer } from 'mobx-react'

import RoomInformationCard from '../Components/RoomInformationCard'

@observer
class ListView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
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

          {/* {RoomStore.roomDatas.map(room => (
            <RoomInformationCard room={room} />
          ))} */}

          {RoomStore.roomDatas.map(room => {
            console.log(room)
            return <RoomInformationCard room={room} />
          })}

          <center>
            <a href="/booking">Go to booking page(Temporary)</a>
          </center>
        </div>
      </div>
    )
  }
}

export default ListView
