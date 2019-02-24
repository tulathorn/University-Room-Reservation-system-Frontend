import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

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

const jumbotronImage = require('../Pictures/bg.png')

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundImage: `url(${jumbotronImage})`,
  backgroundSize: 'absolute'
}

class SearchRecForm extends React.Component {
  setForm = name => event => {
    this.props.setField(name, event.target.value)
  }

  componentDidMount() {
    console.log('Room Data =', this.props)
  }

  search = async () => {
    await this.props.fetchRooms()

    this.props.history.push('/search')
  }

  render() {
    return (

        <div className="jumbotron" style={jumbotronStyle}>
           <Title_1>Find a Room</Title_1>

           <hr className="my-4" color="white"/>
           <Title_2>Info :</Title_2>
           <form>
             <div className="form-row">
               <div className="form-group col-md-4">
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Building</label>
                 <select
                  className="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.setForm('Building')}
                >
                  <option>Building Name</option>
                  <option value="Witsawa Watthana">Witsawa Watthana</option>
                </select>
               </div>
               <div className="form-group col-md-4">
                 <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                   Size
                 </label>
                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                   <option>Room Size</option>
                   <option value="30">30</option>
                   <option value="40">40</option>
                   <option value="60">60</option>
                   <option value="80">80</option>
                   <option value="100">100</option>
                 </select>
               </div>
             </div>
           </form>


           <hr className="my-4" color="white"/>
           <Title_2>Date :</Title_2>
             <form className="form-inline">
               <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                 From
               </label>
               <input
                 type="date"
                 className="form-control my-1 mr-sm-2"
                 id="inlineFormCustomSelectPref"
                 onChange={this.setForm('date')}
               />
               <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                 To
               </label>
               <input
                 type="date"
                 className="form-control my-1 mr-sm-2"
                 id="inlineFormCustomSelectPref"
                 onChange={this.setForm('date')}
               />
             </form>

         <hr className="my-4" color="white"/>
         <Title_2>Time :</Title_2>
           <form className="form-inline">
             <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>Day</label>
             <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option selected>Choose...</option>
               <option value="1">Sunday</option>
               <option value="2">Monday</option>
               <option value="3">Tuesday</option>
               <option value="4">Wednesday</option>
               <option value="5">Thursday</option>
               <option value="6">Friday</option>
               <option value="7">Saturday</option>
             </select>


           </form>
           <form className="form-inline">
             <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>From</label>
             <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option>Choose...</option>
               <option value="1">00</option>
               <option value="2">01</option>
               <option value="3">02</option>
               <option value="4">03</option>
               <option value="5">04</option>
               <option value="6">05</option>
               <option value="7">06</option>
               <option value="8">07</option>
               <option value="9">08</option>
               <option value="10">09</option>
               <option value="11">10</option>
               <option value="12">11</option>
               <option value="13">12</option>
               <option value="14">13</option>
               <option value="15">14</option>
               <option value="16">15</option>
               <option value="17">16</option>
               <option value="18">17</option>
               <option value="19">18</option>
               <option value="20">19</option>
               <option value="21">20</option>
               <option value="22">21</option>
               <option value="23">22</option>
               <option value="24">23</option>
             </select>
             <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
             <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option>Choose...</option>
               <option value="1">00</option>
               <option value="2">30</option>
             </select>
             <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>To</label>
             <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option>Choose...</option>
               <option value="1">00</option>
               <option value="2">01</option>
               <option value="3">02</option>
               <option value="4">03</option>
               <option value="5">04</option>
               <option value="6">05</option>
               <option value="7">06</option>
               <option value="8">07</option>
               <option value="9">08</option>
               <option value="10">09</option>
               <option value="11">10</option>
               <option value="12">11</option>
               <option value="13">12</option>
               <option value="14">13</option>
               <option value="15">14</option>
               <option value="16">15</option>
               <option value="17">16</option>
               <option value="18">17</option>
               <option value="19">18</option>
               <option value="20">19</option>
               <option value="21">20</option>
               <option value="22">21</option>
               <option value="23">22</option>
               <option value="24">23</option>
             </select>
             <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>:</label>
             <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
               <option>Choose...</option>
               <option value="1">00</option>
               <option value="2">30</option>
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



    )
  }
}

export default SearchRecForm
