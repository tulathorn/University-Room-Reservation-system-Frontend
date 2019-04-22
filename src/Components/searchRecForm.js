import React from 'react'
import styled from 'styled-components'

import RoomStore from '../stores/RoomStore'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'


const NormalText = styled.p`
  color: white;
`
const Heading = styled.h2`
  color: white;
`
const SubHeading = styled.h4`
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
  }

  onSubmit = e => {
    e.preventDefault()
    //this.reformDatas()
    //RoomStore.fetchData()
    this.search()
  }
  search = async () => {
    this.props.history.push('/search')
  }

  render() {
    return (

        <div className="jumbotron" style={jumbotronStyle}>
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <Heading>{language[LanguageStore.lang].searchRecForm.FindRoom}</Heading>
            <hr className="my-4" color="white"/>
            <SubHeading>{language[LanguageStore.lang].searchRecForm.Info} :</SubHeading>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.Building}</NormalText>
                <select name="building" type="text" className="custom-select" id="building" placeholder="Room ID"
                  value={RoomStore.searchConfig.Building} onChange={e => RoomStore.setConfig('Building', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="Witsawa Watthana">Witsawa Watthana</option>
                  <option value="CB1">CB1</option>
                  <option value="CB2">CB2</option>
                  <option value="CB3">CB3</option>
                  <option value="CB4">CB4</option>
                  <option value="CB5">CB5</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.Size}</NormalText>
                <select name="capacity" type="number" className="custom-select" id="capacity"
                  value={RoomStore.searchConfig.PeopleCapacity} onChange={e => RoomStore.setConfig('PeopleCapacity', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="60">60</option>
                  <option value="70">70</option>
                  <option value="80">80</option>
                  <option value="90">90</option>
                  <option value="100">100</option>
                  <option value="120">120</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                </select>
              </div>
            </div>
            <hr className="my-4" color="white"/>
            <SubHeading>{language[LanguageStore.lang].searchRecForm.Date} :</SubHeading>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.From}</NormalText>
              </div>
              <div className="col-md-3 col-sm-12">
                <input name="datefrom" type="date" className="form-control" id="datefrom"
                value={RoomStore.schedule.Date} onChange={e => RoomStore.setSchedule('Date', e.target.value)}/>
              </div>
              <div className="col-md-3 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.To}</NormalText>
              </div>
              <div className="col-md-3 col-sm-12">
                <input name="dateto" type="date" className="form-control" id="dateto"
                value={RoomStore.schedule.DateTo} onChange={e => RoomStore.setSchedule('DateTo', e.target.value)}/>
              </div>
            </div>

            <hr className="my-4" color="white"/>
            <SubHeading>{language[LanguageStore.lang].searchRecForm.Time} :</SubHeading>
            <div className="row">
              <div className="col-md-1 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.From}</NormalText>
              </div>
              <div className="col-md-2 col-sm-12">
                <select name="fromhr" type="number" className="custom-select" id="fromhr"
                  value={RoomStore.schedule.fromhr} onChange={e => RoomStore.setSchedule('fromhr', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>
              </div>
              <div className="col-md-1 col-sm-12">
                <NormalText> : </NormalText>
              </div>
              <div className="col-md-2 col-sm-12">
                <select name="frommin" type="number" className="custom-select" id="frommin"
                  value={RoomStore.schedule.frommin} onChange={e => RoomStore.setSchedule('frommin', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="00">00</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div className="col-md-1 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.To}</NormalText>
              </div>
              <div className="col-md-2 col-sm-12">
                <select name="tohr" type="number" className="custom-select" id="tohr"
                  value={RoomStore.schedule.tohr} onChange={e => RoomStore.setSchedule('tohr', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>
              </div>
              <div className="col-md-1 col-sm-12">
                <NormalText> : </NormalText>
              </div>
              <div className="col-md-2 col-sm-12">
                <select name="tomin" type="number" className="custom-select" id="tomin"
                  value={RoomStore.schedule.tomin} onChange={e => RoomStore.setSchedule('tomin', e.target.value)}>
                  <option value="" disabled defaultValue>Choose...</option>
                  <option value="00">00</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <NormalText>{language[LanguageStore.lang].searchRecForm.Day}</NormalText>
              </div>
              <div className="col-md-3 col-sm-12">
                <select name="capacity" type="number" className="custom-select" id="capacity"
                  value={RoomStore.schedule.Day} onChange={e => RoomStore.setSchedule('Day', e.target.value)}>
                  <option defaultValue>Choose...</option>
                  <option value="7">Sunday</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                </select>
              </div>
            </div>
            <hr className="my-4" color="white"/>
            <SubHeading>{language[LanguageStore.lang].searchRecForm.Amenity} :</SubHeading>
            {language[LanguageStore.lang].searchRecForm.Amenities.TeacherComputer}
            {language[LanguageStore.lang].searchRecForm.Amenities.StudentComputer}
            {language[LanguageStore.lang].searchRecForm.Amenities.AirConditioner}
            {language[LanguageStore.lang].searchRecForm.Amenities.Projector} 
            {language[LanguageStore.lang].searchRecForm.Amenities.WhiteBoard}
            {language[LanguageStore.lang].searchRecForm.Amenities.Visualizer}
          </form>
        </div>
      

    )
  }
}

export default SearchRecForm
