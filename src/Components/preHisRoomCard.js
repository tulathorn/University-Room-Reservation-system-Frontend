import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import language from '../languages.json'
import moment from 'moment'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}



class PreHistoryRoomCard extends React.Component {

  render() {
    return (
			<div className="jumbotron text-white" style={jumbotronStyle}>
      
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <h4>{this.props.data.RoomInformation.RoomName}</h4>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].preHisRoomCard.Purpose}</b> : {this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].preHisRoomCard.Date}</b> : {moment(this.props.data.Date.slice(0,19)+'-07:00').format('DD/MM/YYYY')}</p>
            </div>
            <div className="row">
              <p><b>{language[localStorage.getItem('language')].preHisRoomCard.Schedule}</b> : {language[localStorage.getItem('language')].preHisRoomCard.From} {this.props.data.StartTime} {language[localStorage.getItem('language')].preHisRoomCard.To} {this.props.data.EndTime}</p>
            </div>
					</div>
				</div>
      </div>
    )
  }
}

export default PreHistoryRoomCard
