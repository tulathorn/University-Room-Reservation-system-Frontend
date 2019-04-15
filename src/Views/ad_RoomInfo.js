import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomStore from '../stores/RoomStore'
import Swal from 'sweetalert2'
import { observer } from 'mobx-react'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import AdRoomInfoCard from '../Components/adRoomInfoCard';




const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

const jumbotronStyle1 = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

@observer
class AdRoomInfoView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomName', localStorage.getItem('RoomName'))
    RoomStore.fetchData()
    console.log(RoomStore.roomDatas)
  }

  deleteClick = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this room?",
      type: 'warning',
      focusCancel: true,
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        {/*delete room action*/}
        
      
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your room has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container"><br/>
          {RoomStore.roomDatas.map(roomv => { return <AdRoomInfoCard room={roomv} />})}
        </div>
      </div>
    )
  }
}

export default AdRoomInfoView
