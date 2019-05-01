import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class CurHistoryRoomCard extends React.Component {
  componentDidMount() {
    ReservationStore.cleanConfig()
  }
  sendPin = () =>{
    this.pinClick()
  }

  cancelBooking = () => {
    ReservationStore.setConfig('BookingID',this.props.data.BookingID)
    this.cancelClick()
  }


  cancelClick = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to cancel this booking?",
      type: 'warning',
      focusCancel: true,
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.value) {
        ReservationStore.DeleteReservation()
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your booking has been canceled',
          showConfirmButton: true,
          preConfirm: () => {
            window.location.reload();
            }
        })
      }
    })
  }
  pinClick = () =>{
    console.log(this.props.data)
    Swal.fire({
      position: 'center',
      type: 'info',
      title: 'Your PIN is ' + this.props.data.RoomUse.Pin,
      showCloseButton: true,
      showConfirmButton: false
    })
  }
  render() {
    return (
			<div className="jumbotron text-white" style={jumbotronStyle}>
				<div className="row">
					<div className="col-md-4  col-sm-12">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
					<div className="col-md-5  col-sm-12">
            <div className="row">
              <h4>{this.props.data.RoomInformation.RoomName}</h4>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].adReply.Title}</b> : {this.props.data.Title}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Purpose}</b> : {this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Date}</b> : {this.props.data.Date}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Schedule}</b> : {language[localStorage.getItem('language')].curHisRoomCard.From} {this.props.data.StartTime} {language[localStorage.getItem('language')].curHisRoomCard.To} {this.props.data.EndTime}</p>
            </div>
					</div>
					<div className="col-md-3 col-sm-12">
            <button onClick={() => this.sendPin()} type="button" className="btn btn-outline-light btn-lg btn-block">{language[localStorage.getItem('language')].Additional.ShowPin}</button>
            <button onClick={() => this.cancelBooking()} type="button" className="btn btn-danger btn-lg btn-block">{language[localStorage.getItem('language')].curHisRoomCard.CancelTheBooking}</button>
					</div>
				</div>
      </div>
    )
  }
}

export default CurHistoryRoomCard
