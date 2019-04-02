import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class CurHistoryRoomCard extends React.Component {
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
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your booking has been canceled',
          showConfirmButton: false,
          timer: 1500
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
                <b>CPE1121</b>
              </p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].curHisRoomCard.Purpose}: </b></p>
              <p>Tutor Camp</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].curHisRoomCard.Date} : </b></p>
							<p>Friday 9 November 2018</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].curHisRoomCard.Schedule} : </b></p>
							<p>{language[LanguageStore.lang].curHisRoomCard.From} 12:00 {language[LanguageStore.lang].curHisRoomCard.To} 17:00</p>
            </div>
					</div>
					<div className="col-md-3 col-sm-12">
            <button onClick={() => this.pinClick()} type="button" className="btn btn-outline-light btn-lg btn-block">{language[LanguageStore.lang].curHisRoomCard.RequestPinViaEmail}</button>
            <button onClick={() => this.pinClick()} type="button" className="btn btn-outline-light btn-lg btn-block">{language[LanguageStore.lang].curHisRoomCard.RequestPinViaPhone}</button>
            <button onClick={() => this.cancelClick()} type="button" className="btn btn-danger btn-lg btn-block">{language[LanguageStore.lang].curHisRoomCard.CancelTheBooking}</button>
					</div>
				</div>
      </div>
    )
  }
}

export default CurHistoryRoomCard
