import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1F384B;
`

class ReplyForm extends React.Component {
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
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">{language[LanguageStore.lang].replyForm.Email}</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput2">{language[LanguageStore.lang].replyForm.Title}</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Place yor title here"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">{language[LanguageStore.lang].replyForm.Details}</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Insert details, question, problem..."
            rows="5"
            placeholder="Please type your comment..."
          />
        </div>
        <center><button onClick={() => this.ReplyClick()} type="button" className="btn btn-outline-info">
          {language[LanguageStore.lang].replyForm.Reply}
        </button></center>
      </form>
    )
  }
}

export default ReplyForm
