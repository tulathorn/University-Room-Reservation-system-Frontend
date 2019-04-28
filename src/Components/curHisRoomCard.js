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
    ReservationStore.GetReservation()
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
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your PIN has been sent',
      showConfirmButton: false,
      timer: 1500
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
              <p>
                <b>{this.props.data.RoomInformation.RoomName}</b>
              </p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Purpose}: </b></p>
              <p>{this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Date} : </b></p>
							<p>{this.props.data.Date}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Schedule} : </b></p>
							<p>{language[localStorage.getItem('language')].curHisRoomCard.From} {this.props.data.StartTime} {language[localStorage.getItem('language')].curHisRoomCard.To} {this.props.data.EndTime}</p>
            </div>
					</div>
					<div className="col-md-3 col-sm-12">
            <button onClick={() => this.sendPin()} type="button" className="btn btn-outline-light btn-lg btn-block">{language[localStorage.getItem('language')].curHisRoomCard.RequestPinViaEmail}</button>
            <button onClick={() => this.sendPin()} type="button" className="btn btn-outline-light btn-lg btn-block">{language[localStorage.getItem('language')].curHisRoomCard.RequestPinViaPhone}</button>
            <button onClick={() => this.cancelBooking()} type="button" className="btn btn-danger btn-lg btn-block">{language[localStorage.getItem('language')].curHisRoomCard.CancelTheBooking}</button>
					</div>
				</div>
      </div>
    )
  }
}

export default CurHistoryRoomCard
