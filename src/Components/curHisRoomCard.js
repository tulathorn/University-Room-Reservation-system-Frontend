import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

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
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Cancel!',
          'Your booking has been canceled.',
          'success'
        )
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
      <div>
			<div className="jumbotron text-white" style={jumbotronStyle}>
				<div className="row">
					<div className="col-4">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
					<div className="col-5">
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
					<div className="col-3">
            <button onClick={() => this.pinClick()} type="button" className="btn btn-outline-light btn-lg btn-block">Request Pin Via Email</button>
            <button onClick={() => this.pinClick()} type="button" className="btn btn-outline-light btn-lg btn-block">Request Pin Via Phone</button>
            <button onClick={() => this.cancelClick()} type="button" className="btn btn-danger btn-lg btn-block">Cancel the booking</button>
					</div>
				</div>
				</div>
      </div>
    )
  }
}

export default CurHistoryRoomCard
