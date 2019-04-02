import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'


const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

class PreviewCard extends React.Component {
  render() {
    return (
        <div className="jumbotron" style={jumbotronStyle}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>
                <b>{language[LanguageStore.lang].searchPreviewCard.SearchFor} : </b>
              </p>
              <p><b>{language[LanguageStore.lang].searchPreviewCard.Building}</b> : Witsawa Watthana</p>
              <p><b>{language[LanguageStore.lang].searchPreviewCard.Size}</b> : 60 People</p>
              <p><b>{language[LanguageStore.lang].searchPreviewCard.Date}</b> : Monday 12 November 2018</p>
              <p><b>{language[LanguageStore.lang].searchPreviewCard.Time}</b> {language[LanguageStore.lang].searchPreviewCard.From} 13:30 {language[LanguageStore.lang].searchPreviewCard.To} 17:30</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <p>
                <b>{language[LanguageStore.lang].searchPreviewCard.Amenity} : </b>
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.TeacherComputer}</p>
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.StudentComputer}</p>
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.AirConditioner}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.Projector}</p>
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.WhiteBoard}</p>
                  <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.Visualizer}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    )
  }
}

export default PreviewCard
