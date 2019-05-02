import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ContactStore from '../stores/ContactStore';

class ContactCard extends React.Component {
  componentDidMount() {
    ContactStore.resetContactForm()
  }
  
  logoutClick = () => {
    localStorage.clear()
    localStorage.setItem('language',0)
    window.location = "/login"
  }

  onSubmit = e => {
    e.preventDefault()
    ContactStore.message.EmailAddress && ContactStore.message.Title && ContactStore.message.Detail ? this.sentClick() : this.warned()
    
  }

  warned = () =>{
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.MissInfo,
      text: language[localStorage.getItem('language')].Swal.FillAll,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  sentClick = () =>{
      ContactStore.addContact()
      Swal.fire({
      position: 'center',
      type: 'success',
      title: language[localStorage.getItem('language')].Swal.SendCom,
      showConfirmButton: true,
      preConfirm: () => {
        window.location.reload();
        }
    })
  }
  render() {
    return (
        <div className="card">
          <div className="card-body">
            <button onClick={e => this.logoutClick(e)} className="btn btn-outline-info">{language[localStorage.getItem('language')].contactCard.Back}</button>
            <div className="row">
              <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
                <img src={require("../Pictures/logo.png")} width="150" height="150" alt=""/>
                <h5 className="card-tile">{language[localStorage.getItem('language')].contactCard.ContactUs}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-1">
              </div>
              <div className="col-md-8 col-sm-10">
                <form action="#" onSubmit={e => this.onSubmit(e)}>

                  <label for="email">{language[localStorage.getItem('language')].contactCard.Email}</label>
                  <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com"
                  value={ContactStore.message.EmailAddress} onChange={e => ContactStore.setContact('EmailAddress', e.target.value)}/>

                  <label for="title">{language[localStorage.getItem('language')].contactCard.Title}</label>
                  <input name="title" type="text" className="form-control" id="title" placeholder={language[localStorage.getItem('language')].Additional.TitleBody}
                  value={ContactStore.message.Title} onChange={e => ContactStore.setContact('Title', e.target.value)}/>

                  <label for="details">{language[localStorage.getItem('language')].contactCard.Detail}</label>
                  <textarea name="details" type="text" rows="5" className="form-control" id="details" placeholder={language[localStorage.getItem('language')].Additional.DetailBody}
                  value={ContactStore.message.Detail} onChange={e => ContactStore.setContact('Detail', e.target.value)}/>

                    <center>
                    <button type="submit" value="Submit" className="btn btn-outline-info">
                      {language[localStorage.getItem('language')].contactCard.Submit}
                    </button>
                  </center>
                </form>
              </div>
              <div className="col-md-2 col-sm-1">
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ContactCard
