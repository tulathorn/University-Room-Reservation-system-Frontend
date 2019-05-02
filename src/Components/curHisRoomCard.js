import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';
import moment from 'moment'

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
      type: 'warning',
      text: language[localStorage.getItem('language')].Swal.CancelBook,
      focusCancel: true,
      showCancelButton: true,
      cancelButtonColor: '#dc3545',
      cancelButtonText: language[localStorage.getItem('language')].Swal.Back,
      confirmButtonColor: '#17a2b8',
      confirmButtonText: language[localStorage.getItem('language')].Swal.Confirm
    }).then((result) => {
      if (result.value) {
        ReservationStore.DeleteReservation()
        Swal.fire({
          position: 'center',
          type: 'success',
          title: language[localStorage.getItem('language')].Swal.BookCan,
          showConfirmButton: true,
          confirmButtonText: language[localStorage.getItem('language')].Swal.OK,
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
      type: 'info',
      title: language[localStorage.getItem('language')].Swal.PINis + ' ' + this.props.data.RoomUse.Pin,
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
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Purpose}</b> : {this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].curHisRoomCard.Date}</b> : {moment(this.props.data.Date.slice(0,19)+'-07:00').format('DD/MM/YYYY')}</p>
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
