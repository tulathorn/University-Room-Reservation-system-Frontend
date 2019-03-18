import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AllListCard extends React.Component {
  render() {
    return (
        <div className="jumbotron text-white" style={jumbotronStyle}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <center>
                <img src={require('../Pictures/testclassroom.jpg')} height="150" alt=""/>
              </center>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="row">
                <p>
                  <b>Roomname:</b>
                </p>
              </div>
              <div className="row">
                <p>
                  <b>Building: </b>
                </p>
                <p></p>
              </div>
              <div className="row">
                <p>
                  <b>Floor: </b>
                </p>
                <p></p>
              </div>
              <div className="row">
                <p>
                  <b>Size: </b>
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="row">
                <p>
                  <b>Amenities:</b>
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Teacher Computer
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Student Computer
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Air Conditioner
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"disabled/>
                    <label className="form-check-label" for="defaultCheck1">
                      Projector
                    </label><br/>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"select/>
                    <label className="form-check-label" for="defaultCheck1">
                      White Board
                    </label><br/>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" selected/>
                    <label className="form-check-label" for="defaultCheck1">
                      Visualizer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default AllListCard
