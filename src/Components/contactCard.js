import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import ContactStore from '../stores/ContactStore';

const languageLink = {
  color: 'black'
}


class ContactCard extends React.Component {
  componentDidMount() {
    ContactStore.resetContactForm()
  }
  
  onSubmit = e => {
    e.preventDefault()
    ContactStore.addContact()
  }

  sentClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 2000
    })
  }
  render() {
    return (
        <div className="card">
          <div className="card-body">
            <a href="/Login" className="btn btn-outline-info">{language[LanguageStore.lang].contactCard.Back}</a>
            <div className="row">
              <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
                <img src={require("../Pictures/logo.png")} width="150" height="150" alt=""/>
                <h5 className="card-tile">{language[LanguageStore.lang].contactCard.ContactUs}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-1">
              </div>
              <div className="col-md-8 col-sm-10">
                <form action="#" onSubmit={e => this.onSubmit(e)}>

                  <label for="email">{language[LanguageStore.lang].contactCard.Email}</label>
                  <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com"
                  value={ContactStore.message.EmailAddress} onChange={e => ContactStore.setContact('EmailAddress', e.target.value)}/>

                  <label for="title">{language[LanguageStore.lang].contactCard.Title}</label>
                  <input name="title" type="text" className="form-control" id="title" placeholder="Place yor title here"
                  value={ContactStore.message.Title} onChange={e => ContactStore.setContact('Title', e.target.value)}/>

                  <label for="details">{language[LanguageStore.lang].contactCard.Detail}</label>
                  <textarea name="details" type="text" rows="5" className="form-control" id="details" placeholder="Insert details, question, problem..."
                  value={ContactStore.message.Detail} onChange={e => ContactStore.setContact('Detail', e.target.value)}/>

                    <center>
                    <button onClick={() => this.sentClick()} type="submit" value="Submit" className="btn btn-outline-info">
                      {language[LanguageStore.lang].contactCard.Submit}
                    </button>
                  </center>
                </form>
              </div>
              <div className="col-md-2 col-sm-1">
              </div>
            </div>
            <center>
              <button onClick={() => LanguageStore.setLang(0)} type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].Contact.English}</button>
              <button onClick={() => LanguageStore.setLang(1)} type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].Contact.Thai}</button>
          </center>
          </div>
        </div>
    )
  }
}

export default ContactCard
