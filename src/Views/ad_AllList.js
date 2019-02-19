import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdAllListView extends Component {

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <form class="form-inline">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
          <br/>

                <div className="jumbotron text-white" style={jumbotronStyle}>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <center>
                        <img src={require('../Pictures/testclassroom.jpg')} height="150" alt="" />
                      </center>
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="row">

                      </div>
                      <div className="row">
                        <p>
                          <b>Building: </b>
                        </p>

                      </div>
                      <div className="row">
                        <p>
                          <b>Floor: </b>
                        </p>

                      </div>
                      <div className="row">
                        <p>
                          <b>Size: </b>
                        </p>

                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="button" className="btn btn-danger btn-lg btn-block" disabled>
                        Not Completed
                      </button>
                      <button type="button" className="btn btn-info btn-lg btn-block" disabled>
                        Completed
                      </button>
                      <button type="button" className="btn btn-warning btn-lg btn-block" disabled>
                        Canceled
                      </button>
                    </div>
                  </div>
                </div>




          <center>
            <a href="/booking">Go to booking page(Temporary)</a>
          </center>
      
      </div>
</div>
    )
  }
}

export default AdAllListView
