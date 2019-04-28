import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdBookingFormRec from '../Components/ad_bookFormRec'
import RoomInfoCard from '../Components/roomInfoCard'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'
import language from '../languages.json'

@observer
class AdRecBookingView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID', localStorage.getItem('RoomID'))
    RoomStore.fetchData()
  }

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              
              {RoomStore.roomDatas.map(roomv => {
                return <RoomInfoCard room={roomv} />
              })}  
              {<p><b>{language[localStorage.getItem('language')].searchRecForm.Day} : </b>{localStorage.getItem('ScheduleDay')}</p>}
            </div>
            <div className="col-md-6 col-sm-12">
              <AdBookingFormRec/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdRecBookingView
