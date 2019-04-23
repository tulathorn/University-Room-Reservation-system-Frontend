import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import RoomStore from '../stores/RoomStore'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}



class PreHistoryRoomCard extends React.Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    //RoomStore.setConfig('RoomID',this.props.data.RoomID)
    RoomStore.fetchData()
  }

  render() {
    return (
			<div className="jumbotron text-white" style={jumbotronStyle}>
      
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
					</div>
          <div className="col-md-5 col-sm-12">
            <div className="row">
              <p>
                <b>{this.props.data.RoomInformation.RoomName}</b>
                
              </p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].preHisRoomCard.Purpose}: </b></p>
              <p>{this.props.data.Purpose}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].preHisRoomCard.Date} : </b></p>
							<p>{this.props.data.Date}</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].preHisRoomCard.Schedule} : </b></p>
							<p>{language[LanguageStore.lang].preHisRoomCard.From} {this.props.data.StartTime} {language[LanguageStore.lang].preHisRoomCard.To} {this.props.data.EndTime}</p>
            </div>
					</div>
					<div className="col-md-3 col-sm-12">
            {/* //Alert for each status of booking
            <div class="alert alert-danger" role="alert" >
              {language[LanguageStore.lang].preHisRoomCard.NotCompleted}
            </div>
            <div class="alert alert-warning" role="alert">
              {language[LanguageStore.lang].preHisRoomCard.Cancel}
            </div>
            
            <div class="alert alert-info" role="alert">
            {language[LanguageStore.lang].preHisRoomCard.Completed}
            </div>*/}
					</div>
				</div>
      </div>
    )
  }
}

export default PreHistoryRoomCard
