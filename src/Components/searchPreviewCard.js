import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

class PreviewCard extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={jumbotronStyle}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <p>
                <b>Search For : </b>
              </p>
              <p><b>Building</b> : Witsawa Watthana</p>
              <p><b>Size</b> : 60 People</p>
              <p><b>Date</b> : Monday 12 November 2018</p>
              <p><b>From</b> 13:30 to 17:30</p>
            </div>
            <div className="col-md-8 col-sm-12">
              <p>
                <b>Filtered : </b>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                  <p>Amentity 1</p>
                  <p>Amentity 2</p>
                  <p>Amentity 3</p>
                  </div>
                  <div className="col-md-6 col-sm-12">
                  <p>Amentity 4</p>
                  <p>Amentity 5</p>
                  <p>Amentity 6</p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviewCard
