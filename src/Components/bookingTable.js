import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

class BookingTable extends React.Component {
  render() {
    return (
      <table class="table table-hover table-bordered">
        <thead class="text-center">
          <tr class="table-info">
            <th scope="col">{language[LanguageStore.lang].bookingTable.DateFrom}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.DateTo}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.TimeFrom}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.TimeTo}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.Day}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.UserInfo}</th>
            <th scope="col">{language[LanguageStore.lang].bookingTable.Purpose}</th>
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
    )
  }
}

export default BookingTable
