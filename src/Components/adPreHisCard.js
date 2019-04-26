import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdPreHistoryRoomCard extends React.Component {
  render() {
    return (
			<div className="jumbotron text-white" style={jumbotronStyle}>
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <p><b>{this.props.data.RoomInformation.RoomName}</b></p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].Additional.Username}</b>{this.props.data.UserInfo.UsernameID}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Purpose}: </b></p>
              <p>{this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Date} : </b></p>
							<p>{this.props.data.Date}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Schedule} : </b></p>
							<p>{language[LanguageStore.lang].adPreHisCard.From} {this.props.data.StartTime} {language[LanguageStore.lang].adPreHisCard.To} {this.props.data.EndTime}</p>
            </div>
					</div>
					
				</div>
      </div>
    )
  }
}

export default AdPreHistoryRoomCard
