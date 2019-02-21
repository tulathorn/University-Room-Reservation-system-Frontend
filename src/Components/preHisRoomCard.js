import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class PreHistoryRoomCard extends React.Component {
  render() {
    return (
      <div>
			<div className="jumbotron text-white" style={jumbotronStyle}>
				<div className="row">
					<div className="col-4">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
          <div className="col-5">
            <div className="row">
              <p>
                <b>CPE1121</b>
              </p>
            </div>
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
            {/* //Alert for each status of booking
            <div class="alert alert-danger" role="alert" >
              Not Completed
            </div>
            <div class="alert alert-warning" role="alert">
              Canceled
            </div>
            */}
            <div class="alert alert-info" role="alert">
              Completed
            </div>
					</div>
				</div>
			</div>
      </div>
    )
  }
}

export default PreHistoryRoomCard
