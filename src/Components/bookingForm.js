import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class BookingForm extends React.Component {
  componentDidMount() {
    ReservationStore.cleanBookingConfig()
  }
  reformDatas= () => {
    ReservationStore.setBookingConfig('Date',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('UserID',localStorage.getItem('UserID'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    console.log(ReservationStore.bookingConfig)
    ReservationStore.addReservation()
    this.bookClick()
    
  }

  bookClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Booking completed',
      focusConfirm: true,
      showConfirmButton: true,
      preConfirm: () => {
        window.location = "/";
      }
    })
  }
  updateClick = () =>{
    Swal.fire({
      title: 'User Information',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Email Address">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Phone Number">',
      focusConfirm: false,
      confirmButtonColor: '#17a2b8',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
  }
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>

          <form action="#" onSubmit={e => this.onSubmit(e)}>
            {language[LanguageStore.lang].bookingForm.Firstname}
              <input name="firstname" type="text" className="form-control" id="firstname" placeholder="Firstname"
              value={localStorage.getItem('token')} readonly disabled/>
            {language[LanguageStore.lang].bookingForm.Surname}
              <input name="surname" type="text" className="form-control" id="surname" placeholder="Surname"
              value={localStorage.getItem('token')} readonly disabled/>
            {language[LanguageStore.lang].bookingForm.Email}
              <input name="email" type="text" className="form-control" id="email" placeholder="Email Address"
              value={localStorage.getItem('token')} readonly disabled/>
            {language[LanguageStore.lang].bookingForm.Phone}
              <input name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number"
              value={localStorage.getItem('token')} readonly disabled/>
            {language[LanguageStore.lang].Additional.Title}
              <input name="title" type="text" className="form-control" id="title" placeholder="Title"
              value={ReservationStore.bookingConfig.Title} onChange={e => ReservationStore.setBookingConfig('Title', e.target.value)}/>
            {language[LanguageStore.lang].bookingForm.Purpose}
              <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder="Identify your purpose for booking this room..."
              value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>

              
            <br/>
            <div className="row">
              <div className="col-md-2 col-sm-5">
                <button type="submit" value="Submit" className="btn btn-info">
                  {language[LanguageStore.lang].bookingForm.Book}
                </button>
              </div>
              <div className="col-md-7 col-sm-2">
              </div>
              <div className="col-md-3 col-sm-5">
                <button onClick={() => this.updateClick()} type="button" className="btn btn-outline-info">
                  {language[LanguageStore.lang].bookingForm.Update}
                </button>
              </div>
            </div>
          </form>

  			</div>
    )
  }
}

export default BookingForm
