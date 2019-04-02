import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}
class RecPreviewCard extends React.Component {
  render() {
    return (
      <div className="jumbotron" style={jumbotronStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
              <b>{language[LanguageStore.lang].recPreviewCard.SearchFor} : </b>
            </p>
            <p><b>{language[LanguageStore.lang].recPreviewCard.Building}</b> : Witsawa Watthana</p>
            <p><b>{language[LanguageStore.lang].recPreviewCard.Size}</b> : 60 {language[LanguageStore.lang].recPreviewCard.Peoples}</p>
            <p><b>{language[LanguageStore.lang].recPreviewCard.Date}</b> : Monday 12 November 2018 - Monday 12 Decemmber 2018</p>
            <p><b>{language[LanguageStore.lang].recPreviewCard.Day}</b> : Monday</p>
            <p><b>{language[LanguageStore.lang].recPreviewCard.Time}</b> {language[LanguageStore.lang].recPreviewCard.From} 13:30 {language[LanguageStore.lang].recPreviewCard.To} 17:30</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              <b>{language[LanguageStore.lang].recPreviewCard.Amenity} : </b>
            </p>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.TeacherComputer}</p>
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.StudentComputer}</p>
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.AirConditioner}</p>
              </div>
              <div className="col-md-6 col-sm-12">
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.Projector}</p>
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.WhiteBoard}</p>
                <p>{language[LanguageStore.lang].recPreviewCard.Amenities.Visualizer}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default RecPreviewCard
