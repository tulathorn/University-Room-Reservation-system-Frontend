import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`


class AdReplyView extends Component {
  render() {
    return (
      <div>
        <div className="container">


          <br/><Title>Title</Title>


          <div class="card">

            <h5 class="card-header">
              <div class="row">
                <div class="col-6">
                  Email
                </div>
                <div class="col-6" align="right">
                  Time
                </div>
              </div>
            </h5>

            <div class="card-body">
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

          </div>

          <br/><Title>Reply</Title>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
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
            <center><button type="button" class="btn btn-outline-dark">
              Reply
            </button></center>
          </form>


        </div>
      </div>
    )
  }
}

export default AdReplyView
