import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingTimatableView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row"><h2>Booking Timetable</h2></div><br/>

            <table class="table table-hover table-bordered">
              <thead class="text-center">
                <tr class="table-info">
                  <th scope="col">Date (From)</th>
                  <th scope="col">Date (To)</th>
                  <th scope="col">Time (From)</th>
                  <th scope="col">Time (to)</th>
                  <th scope="col">Day</th>
                  <th scope="col">Booking</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">12/02/2019</td>
                  <td class="text-center">-</td>
                  <td class="text-center">8:30</td>
                  <td class="text-center">17:30</td>
                  <td class="text-center">Monday</td>
                  <td>
                    Arnan Hirunratanakorn<br/>
                    58070503438<br/>
                    honhon013@hotmail.com<br/>
                    0948761543
                  </td>
                  <td>CPE111</td>

                </tr>

              </tbody>
            </table>
            <button type="button" className="btn btn-outline-info">
              Back
            </button>

        </div>
      </div>
    )
  }
}

export default AdBookingTimatableView
