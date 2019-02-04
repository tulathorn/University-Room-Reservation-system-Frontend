import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'

const languageLink = {
  color: 'white'
}
const bgColor = {
  backgroundColor: '#1F384B'
}

class ContactView extends Component {
  render() {
    return (
      <div style={bgColor}><Navbar />
      <div className="container">
        <br/><br/><br/>
        <div className="row">
          <div className="col-8 offset-2">
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-outline-dark">
                  Back
                </button>
                <div className="row">
                  <div className="col-12" style={{ textAlign: 'center' }}>
                    <img src={require("../Pictures/logo.png")} width="150" height="150" alt=""/>
                    <h5 className="card-tile">Contact us</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8 offset-2">
                    <form action="">
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput2">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput2"
                          placeholder="Place yor title here"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Detail</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Insert details, question, problem..."
                          rows="5"
                          placeholder="Please type your comment..."
                        />
                      </div>
                      <center><button type="button" className="btn btn-outline-dark">
                        Submit
                      </button></center>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button type="button" className="btn btn-link" style={languageLink}>English</button>
          <button type="button" className="btn btn-link" style={languageLink}>ภาษาไทย</button>
          <br/><br/><br/>
        </center>
      </div>
      </div>
    )
  }
}

export default ContactView
