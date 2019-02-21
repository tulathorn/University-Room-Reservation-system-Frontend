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
            <div className="col-4">
              <p>
                <b>Search For : </b>
              </p>
              <p><b>Building</b> : Witsawa Watthana</p>
              <p><b>Size</b> : 60 People</p>
              <p><b>Date</b> : Monday 12 November 2018</p>
              <p><b>From</b> 13:30 to 17:30</p>
            </div>
            <div className="col-8">
              <p>
                <b>Filtered : </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviewCard
