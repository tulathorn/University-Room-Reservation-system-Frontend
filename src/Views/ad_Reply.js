import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`


class AdReplyView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">


          <br/><Title>Title</Title>


          <div className="card">

            <h5 className="card-header">
              <div className="row">
                <div className="col-6">
                  Email
                </div>
                <div className="col-6" align="right">
                  Time
                </div>
              </div>
            </h5>

            <div className="card-body">
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

          </div>

          <br/><Title>Reply</Title>
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
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
              Reply
            </button></center>
          </form>


        </div>
      </div>
    )
  }
}

export default AdReplyView
