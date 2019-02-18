import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class CurHistoryRoomCard extends React.Component {
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





						<button type="button" className="btn btn-outline-light btn-lg btn-block">Request Pin Via Email</button>
						<button type="button" className="btn btn-outline-light btn-lg btn-block">Request Pin Via Phone</button>
						<button type="button" className="btn btn-danger btn-lg btn-block">Cancel the booking</button>
					</div>
				</div>
				</div>
      </div>
    )
  }
}

export default CurHistoryRoomCard
