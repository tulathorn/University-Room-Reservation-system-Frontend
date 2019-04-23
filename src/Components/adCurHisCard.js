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

class AdCurHistoryRoomCard extends React.Component {
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
  render() {
    return (
      <div className="jumbotron text-white" style={jumbotronStyle}>
        <div className="row">
          <div className="col-md-4  col-sm-12">
            <center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
          </div>
          <div className="col-md-5  col-sm-12">
            <h4>{this.props.data.RoomInformation.RoomName}</h4>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adCurHisCard.Purpose} : </b></p>
              <p>{this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adCurHisCard.Date} : </b></p>
              <p>{this.props.data.Date}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adCurHisCard.Schedule} : </b></p>
              <p>{language[LanguageStore.lang].adCurHisCard.From} {this.props.data.StartTime} {language[LanguageStore.lang].adCurHisCard.To} {this.props.data.EndTime}</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">


            <br/><br/><br/><br/><br/>
            <button onClick={() => this.cancelClick()} type="button" className="btn btn-danger btn-lg btn-block">{language[LanguageStore.lang].adCurHisCard.CancelTheBooking}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AdCurHistoryRoomCard
