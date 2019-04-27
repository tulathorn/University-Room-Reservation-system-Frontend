import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
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
      console.log(ReservationStore.bookingConfig)
      //ReservationStore.addReservation()
      if (result.value) {
        Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Booking completed',
        focusConfirm: true,
        showConfirmButton: true,
        preConfirm: () => {
          window.location = "/ad_search_nor";
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
                {language[LanguageStore.lang].adBookingForm.ID}
                <input name="username" type="text" className="form-control" id="username" placeholder="UserName ID"
                value={ReservationStore.searchTemp.UsernameID} onChange={e => ReservationStore.setSearch('UsernameID', e.target.value)}/>
                {language[LanguageStore.lang].Additional.Title}
                <input name="title" type="text" className="form-control" id="title" placeholder="Title"
                value={ReservationStore.bookingConfig.Title} onChange={e => ReservationStore.setBookingConfig('Title', e.target.value)}/>
                {language[LanguageStore.lang].adBookingForm.Purpose}
                <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder="Identify your purpose for booking this room..."
                value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>
                {language[LanguageStore.lang].Additional.Term}
                <select name="term" type="text" className="custom-select" id="term"
                  value={ReservationStore.bookingConfig.Term} onChange={e => ReservationStore.setBookingConfig('Term', e.target.value)}>
                  <option value="" disabled selected>Choose...</option>
                  <option value="1/2562">1/2562</option>
                  <option value="2/2562">2/2562</option>
                  <option value="1/2563">1/2563</option>
                  <option value="2/2563">2/2563</option>
                </select>
            </div>
            
              {language[LanguageStore.lang].adBookingForm.EmailAddress}<br/>
              {language[LanguageStore.lang].adBookingForm.Phone}<br/>
              {language[LanguageStore.lang].adBookingForm.Year}<br/>
              {language[LanguageStore.lang].adBookingForm.Section}<br/>
              {language[LanguageStore.lang].adBookingForm.Program}<br/>
                   
              <button type="submit" value="Submit" className="btn btn-info">
                {language[LanguageStore.lang].adBookingForm.Book}
              </button>
            
          </form>
              
          
        </div>
    )
  }
}

export default AdBookingFormRec
