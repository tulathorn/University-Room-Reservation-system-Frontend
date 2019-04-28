import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

class BookingTable extends React.Component {
  render() {
    return (
      
          <tr>
            <td className="text-center">{this.props.data.Date}</td>
            <td className="text-center">-</td>
            <td className="text-center">{this.props.data.StartTime}</td>
            <td className="text-center">{this.props.data.EndTime}</td>
            <td className="text-center">{this.props.data.Day}</td>
            <td>
              {this.props.data.UserInfo.UsernameID}<br/>
              {this.props.data.UserInfo.FirstName}{' '}{this.props.data.UserInfo.LastName}<br/>
              {this.props.data.UserInfo.EmailAddress}<br/>
            </td>
            <td className="text-center">{this.props.data.Purpose}</td>
          </tr>
        
    )
  }
}

export default BookingTable
