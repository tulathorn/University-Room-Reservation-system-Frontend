import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdBookingForm from '../Components/ad_bookForm'
import RoomInfoCard from '../Components/roomInfoCard'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'
import AuthenticationGate from '../Components/AuthenticationGateAdmin'

@observer
class AdBookingView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID', localStorage.getItem('RoomID'))
    RoomStore.fetchData()
  }

  render() {
    return (
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              {RoomStore.roomDatas.map(roomv => {
                return <RoomInfoCard room={roomv} />
              })}
            </div>
            <div className="col-md-6 col-sm-12">
              <AdBookingForm/>
            </div>
          </div>
        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default AdBookingView
