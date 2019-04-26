import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

class ReplyForm extends React.Component {
  
  onSubmit = e => {
    e.preventDefault()
    //window.open('mailto:honhon015@hotmail.com?subject=Title&body=Hon01Body');
    this.ReplyClick()
  }
  
  ReplyClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div>
        <form action="#" onSubmit={e => this.onSubmit(e)}>
          <label for="email">{language[LanguageStore.lang].replyForm.Email}</label>
          <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com"
          />

          <label for="title">{language[LanguageStore.lang].replyForm.Title}</label>
          <input name="title" type="text" className="form-control" id="title" placeholder="Place yor title here"
          />

          <label for="details">{language[LanguageStore.lang].replyForm.Details}</label>
          <textarea name="details" type="text" rows="5" className="form-control" id="details" placeholder="Insert details, question, problem..."
          />

          <br/>
          <center><button  type="submit" value="Submit" className="btn btn-outline-info">
          {language[LanguageStore.lang].replyForm.Reply}</button></center>
        </form>
      </div>



      
    )
  }
}

export default ReplyForm
