import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

class BookingTable extends React.Component {
  render() {
    return (
      
          <tr>
            {console.log('inside')}
            <td class="text-center">{this.props.data.Date}</td>
            <td class="text-center">-</td>
            <td class="text-center">{this.props.data.StartTime}</td>
            <td class="text-center">{this.props.data.EndTime}</td>
            <td class="text-center">{this.props.data.Day}</td>
            <td>
              {this.props.data.UserInfo.UsernameID}<br/>
              {this.props.data.UserInfo.FirstName}{' '}{this.props.data.UserInfo.LastName}<br/>
              {this.props.data.UserInfo.EmailAddress}<br/>
            </td>
            <td class="text-center">{this.props.data.Purpose}</td>
          </tr>
        
    )
  }
}

export default BookingTable
