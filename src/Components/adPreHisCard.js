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
          <div className="col-md-5 col-sm-12">
            <div className="row">
              <p>
                <b>CPE1121</b>
              </p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Purpose}: </b></p>
              <p>Tutor Camp</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Date} : </b></p>
							<p>Friday 9 November 2018</p>
            </div>
            <div className="row">
              <p><b>{language[LanguageStore.lang].adPreHisCard.Schedule} : </b></p>
							<p>{language[LanguageStore.lang].adPreHisCard.From} 12:00 {language[LanguageStore.lang].adPreHisCard.To} 17:00</p>
            </div>
					</div>
					<div className="col-md-3 col-sm-12">
            {/* //Alert for each status of booking
            <div class="alert alert-danger" role="alert" >
              {language[LanguageStore.lang].adPreHisCard.NotCompleted}
            </div>
            <div class="alert alert-warning" role="alert">
              {language[LanguageStore.lang].adPreHisCard.Cancel}
            </div>*/}
            
            <div class="alert alert-info" role="alert">
              {language[LanguageStore.lang].adPreHisCard.Completed}
            </div>
					</div>
				</div>
      </div>
    )
  }
}

export default AdPreHistoryRoomCard
