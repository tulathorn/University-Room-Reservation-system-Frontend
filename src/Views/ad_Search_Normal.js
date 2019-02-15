import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import styled from 'styled-components'

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

class AdSearchView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-6">
                <button type="button" className="btn btn-danger btn-lg btn-block" disabled>Normal Booking</button>
              </div>
              <div className="col-6">
                <a href="/ad_curhistory" className="btn btn-outline-danger btn-lg btn-block">Recurring Booking</a>
              </div>
            </div>
            <br/>
            <br/>



            <div className="jumbotron" style={jumbotronStyle}>
               <Title_1>Find a Room</Title_1>

               <hr className="my-4" color="white"/>
               <Title_2>Info :</Title_2>
               <form>
                 <div className="form-row">
                   <div className="form-group col-md-4">
                     <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Date</label>
                     <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>DD/MM/YY</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                     </select>
                   </div>
                   <div className="form-group col-md-4">
                     <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Building</label>
                     <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>Building Name</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                     </select>
                   </div>
                   <div className="form-group col-md-4">
                     <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Size</label>
                     <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>Room Size</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                     </select>
                   </div>
                 </div>
               </form>

             <hr className="my-4" color="white"/>
             <Title_2>Time :</Title_2>
               <form className="form-inline">
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>From</label>
                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                   <option selected>Choose...</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                   <option selected>Choose...</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>To</label>
                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                   <option selected>Choose...</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                   <option selected>Choose...</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>
               </form>

             <hr className="my-4" color="white"/>
             <Title_2>Filters :</Title_2>
               <div className="form-row">

                 <div className="col-sm-4">
                   <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       Teacher Computer
                     </label><br/>
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       Student Computer
                     </label>
                   </div>
                 </div>

                 <div className="col-sm-4">
                   <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       Projector
                     </label><br/>
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       White Board
                     </label>
                   </div>
                 </div>

                 <div className="col-sm-4">
                   <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       Air Conditioner
                     </label><br/>
                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                     <label className="form-check-label" for="defaultCheck1" style={textColor}>
                       Visualizer
                     </label>
                   </div>
                 </div>

               </div>
             </div>

            <center><button type="button" className="btn btn-outline-dark">Search</button></center>


          </div>
        <center>
            <a href="/ad_room_info">Go to room info(Temporary)</a>
          </center>
      </div>
    )
  }
}

export default AdSearchView
