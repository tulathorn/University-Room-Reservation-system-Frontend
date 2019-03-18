import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

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
            <h4>CPE1121</h4>
            <div className="row">
              <p><b>Purpose : </b></p>
              <p>Tutor Camp</p>
            </div>
            <div className="row">
              <p><b>Date : </b></p>
              <p>Friday 9 November 2018</p>
            </div>
            <div className="row">
              <p><b>Schedule : </b></p>
              <p>From 12:00 to 17:00</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">


            <br/><br/><br/><br/><br/>
            <button onClick={() => this.cancelClick()} type="button" className="btn btn-danger btn-lg btn-block">Cancel the booking</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AdCurHistoryRoomCard