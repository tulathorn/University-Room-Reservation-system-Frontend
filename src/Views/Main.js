import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const textColor = {
  color: 'white'
}

const Title = styled.h1`
  color: #1F384B;
`
const Title_1 = styled.h2`
  color: white;
`
const Title_2 = styled.h4`
  color: white;
`
const jumbotronImage = require('../Pictures/bg.png');
const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundImage: `url(${jumbotronImage})`,
  backgroundSize: 'absolute'
}


class MainView extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/><center><Title>Welcome to University Room Reservation System</Title></center><br/>



               <div class="jumbotron" style={jumbotronStyle}>
                  <Title_1>Find a Room</Title_1>

                  <hr class="my-4" color="white"/>
                  <Title_2>Info :</Title_2>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Date</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                          <option selected>DD/MM/YY</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Building</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                          <option selected>Building Name</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Size</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                          <option selected>Room Size</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </form>

                <hr class="my-4" color="white"/>
                <Title_2>Time :</Title_2>
                  <form class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>From</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>To</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </form>

                <hr class="my-4" color="white"/>
                <Title_2>Filters :</Title_2>
                  <div class="form-row">

                    <div class="col-sm-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          Teacher Computer
                        </label><br/>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          Student Computer
                        </label>
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          Projector
                        </label><br/>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          White Board
                        </label>
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          Air Conditioner
                        </label><br/>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1" style={textColor}>
                          Visualizer
                        </label>
                      </div>
                    </div>

                  </div>
                </div>



              <center><button type="button" class="btn btn-outline-dark">Search</button></center>
              <center><a href="/search">Go to list page(Temporary)</a></center>
        </div>
      </div>
    )
  }
}

export default MainView
