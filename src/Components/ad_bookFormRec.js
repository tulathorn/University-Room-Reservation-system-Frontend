import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingFormRec extends React.Component {
  componentDidMount() {
    ReservationStore.cleanBookingConfig()
  }
  reformDatas= () => {
    ReservationStore.ConvertUsernameToID()
    ReservationStore.setBookingConfig('StartDate',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('EndDate',localStorage.getItem('ScheduleDateTo'))
    ReservationStore.setBookingConfig('Day',localStorage.getItem('ScheduleDay'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
    // Need to add feature to store section
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    this.bookClick()
  }
  
  bookClick = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to book this room for "+ReservationStore.searchTemp.UsernameID,
      type: 'question',
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, Book the room!'
    }).then((result) => {
      if (result.value) {
        console.log(ReservationStore.bookingConfig)
        //ReservationStore.addReservation()
        Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Booking completed',
        text: "Redirect to search page!",
        focusConfirm: true,
        showConfirmButton: true,
        preConfirm: () => {
          window.location = "/ad_search_rec";
          }
        })
      }
    })
  }
  
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
                {language[localStorage.getItem('language')].adBookingForm.ID}
                <input name="username" type="text" className="form-control" id="username" placeholder={language[localStorage.getItem('language')].adBookingForm.ID}
                value={ReservationStore.searchTemp.UsernameID} onChange={e => ReservationStore.setSearch('UsernameID', e.target.value)}/>
                {language[localStorage.getItem('language')].Additional.Title}
                <input name="title" type="text" className="form-control" id="title" placeholder={language[localStorage.getItem('language')].Additional.Title}
                value={ReservationStore.bookingConfig.Title} onChange={e => ReservationStore.setBookingConfig('Title', e.target.value)}/>
                {language[localStorage.getItem('language')].adBookingForm.Purpose}
                <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder={language[localStorage.getItem('language')].Additional.PurposeBody}
                value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>
                {language[localStorage.getItem('language')].Additional.Term}
                <select name="term" type="text" className="custom-select" id="term"
                  value={ReservationStore.bookingConfig.Term} onChange={e => ReservationStore.setBookingConfig('Term', e.target.value)}>
                  <option value="" disabled selected>{language[localStorage.getItem('language')].Additional.Choose}</option>
                  <option value="1/2562">1/2562</option>
                  <option value="2/2562">2/2562</option>
                  <option value="1/2563">1/2563</option>
                  <option value="2/2563">2/2563</option>
                </select>
            </div>
            
              {language[localStorage.getItem('language')].adBookingForm.EmailAddress}<br/>
              {language[localStorage.getItem('language')].adBookingForm.Phone}<br/>
              {language[localStorage.getItem('language')].adBookingForm.Year}<br/>
              {language[localStorage.getItem('language')].adBookingForm.Section}<br/>
              {language[localStorage.getItem('language')].adBookingForm.Program}<br/>
                   
              <button type="submit" value="Submit" className="btn btn-info">
                {language[localStorage.getItem('language')].adBookingForm.Book}
              </button>
            
          </form>
              
          
        </div>
    )
  }
}

export default AdBookingFormRec
