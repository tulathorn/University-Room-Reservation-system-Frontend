import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'

const Heading = styled.h2`
  color: white;
`
const SubHeading = styled.h4`
  color: white;
`
const textColor = {
  color: 'white'
}
const NormalText = styled.p`
  color: white;
`
const jumbotronImage = require('../Pictures/bg.png')

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundImage: `url(${jumbotronImage})`,
  backgroundSize: 'absolute'
}

class ReservationForm extends React.Component {
  setForm = name => event => {
    this.props.setField(name, event.target.value)
  }
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.resetSchedule()
  }
  constructor(props) {
    super(props);
    this.state = { 
      HasTeacherComputers: true,
      HasStudentComputers: true,
      HasProjector: true,
      HasAirConditioner: true,
      HasWhiteboard: true,
      HasVisualizer: true};
  }

  toggleCheck = (field) => {
    this.setState(state => ({ [field]: !state[field] }));
  };

  

  reformDatas= () => {
    localStorage.setItem('ScheduleDate',RoomStore.schedule.Date)
    localStorage.setItem('ScheduleFromHr',RoomStore.schedule.fromhr)
    localStorage.setItem('ScheduleFromMin',RoomStore.schedule.frommin)
    localStorage.setItem('ScheduleToHr',RoomStore.schedule.tohr)
    localStorage.setItem('ScheduleToMin',RoomStore.schedule.tomin)
    //RoomStore.setConfigEquipment('HasTeacherComputers', this.state.HasTeacherComputers ? this.state.HasTeacherComputers=1 : this.state.HasTeacherComputers=0)
    //RoomStore.setConfigEquipment('HasStudentComputers', this.state.HasStudentComputers ? this.state.HasStudentComputers=1 : this.state.HasStudentComputers=0)
    //RoomStore.setConfigEquipment('HasProjector', this.state.HasProjector ? this.state.HasProjector=1 : this.state.HasProjector=0)
    //RoomStore.setConfigEquipment('HasAirConditioner', this.state.HasAirConditioner ? this.state.HasAirConditioner=1 : this.state.HasAirConditioner=0)
    //RoomStore.setConfigEquipment('HasWhiteboard', this.state.HasWhiteboard ? this.state.HasWhiteboard=1 : this.state.HasWhiteboard=0)
    //RoomStore.setConfigEquipment('HasVisualizer', this.state.HasVisualizer ? this.state.HasVisualizer=1 : this.state.HasVisualizer=0)
    console.log(RoomStore.searchConfig)
  }
  
  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    RoomStore.fetchData()
    this.search()
  }


  search = async () => {
    //await this.props.fetchRooms()

    this.props.history.push('/search')
  }


  @observer
  render() {
    return (
      <div className="jumbotron" style={jumbotronStyle}>
        
        


 
        
        <Heading> {language[LanguageStore.lang].reservationForm.FindRoom} </Heading>
        <hr className="my-4" color="white" />
        <SubHeading> {language[LanguageStore.lang].reservationForm.Info}: </SubHeading>
        <form action="#" onSubmit={e => this.onSubmit(e)}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <NormalText>{language[LanguageStore.lang].reservationForm.Date}</NormalText>
              <input name="date" type="date" className="form-control" id="date"
              value={RoomStore.schedule.Date} onChange={e => RoomStore.setSchedule('Date', e.target.value)}/>
            </div>
            <div className="col-md-4 col-sm-12">
              <NormalText>{language[LanguageStore.lang].reservationForm.Building}</NormalText>
              <select name="building" type="text" className="custom-select" id="building" placeholder="Room ID"
                value={RoomStore.searchConfig.Building} onChange={e => RoomStore.setConfig('Building', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
                <option value="Witsawa Watthana">Witsawa Watthana</option>
                <option value="CB1">CB1</option>
                <option value="CB2">CB2</option>
                <option value="CB3">CB3</option>
                <option value="CB4">CB4</option>
                <option value="CB5">CB5</option>
              </select>
            </div>
            <div className="col-md-4 col-sm-12">
              <NormalText>{language[LanguageStore.lang].reservationForm.Size}</NormalText>
              <select name="capacity" type="number" className="custom-select" id="capacity"
                value={RoomStore.searchConfig.PeopleCapacity} onChange={e => RoomStore.setConfig('PeopleCapacity', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
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
          <hr className="my-4" color="white" />
          <SubHeading> {language[LanguageStore.lang].reservationForm.Time}: </SubHeading>
          
          <div className="row">
            <div className="col-md-2 col-sm-12">
            <NormalText>{language[LanguageStore.lang].reservationForm.From}</NormalText>
            </div>
            <div className="col-md-3 col-sm-12">
              <select name="fromhr" type="number" className="custom-select" id="fromhr"
              value={RoomStore.schedule.fromhr} onChange={e => RoomStore.setSchedule('fromhr', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
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
            <center><NormalText> : </NormalText></center>
            </div>
            <div className="col-md-3 col-sm-12">
              <select name="frommin" type="number" className="custom-select" id="frommin"
              value={RoomStore.schedule.frommin} onChange={e => RoomStore.setSchedule('frommin', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12">
            <NormalText>{language[LanguageStore.lang].reservationForm.To}</NormalText>
            </div>
            <div className="col-md-3 col-sm-12">
              <select name="tohr" type="number" className="custom-select" id="tohr"
              value={RoomStore.schedule.tohr} onChange={e => RoomStore.setSchedule('tohr', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
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
            <center><NormalText> : </NormalText></center>
            </div>
            <div className="col-md-3 col-sm-12">
              <select name="tomin" type="number" className="custom-select" id="tomin"
              value={RoomStore.schedule.tomin} onChange={e => RoomStore.setSchedule('tomin', e.target.value)}>
                <option value="" disabled selected>Choose...</option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <hr className="my-4" color="white" />
          <SubHeading> {language[LanguageStore.lang].reservationForm.Amenity}: </SubHeading>
          
            <div class="form-check">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <input name="teachercom" type="checkbox" className="form-check-input" id="teachercom"
                  value={this.state.HasTeacherComputers} onClick={() => this.toggleCheck('HasTeacherComputers')} defaultChecked/>
                  <label className="form-check-label" for="teachercom" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.TeacherComputer}</label><br/>
                  <input name="studentcom" type="checkbox" className="form-check-input" id="studentcom"
                  value={this.state.HasStudentComputers} onClick={() => this.toggleCheck('HasStudentComputers')} defaultChecked/>
                  <label className="form-check-label" for="studentcom" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.StudentComputer}</label><br/>
                  <input name="aircon" type="checkbox" className="form-check-input" id="aircon"
                  value={this.state.HasAirConditioner} onClick={() => this.toggleCheck('HasAirConditioner')} defaultChecked/>
                  <label className="form-check-label" for="aircon" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.AirConditioner}</label><br/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <input name="projector" type="checkbox" className="form-check-input" id="projector"
                  value={this.state.HasProjector} onClick={() => this.toggleCheck('HasProjector')} defaultChecked/>
                  <label className="form-check-label" for="projector" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.Projector}</label><br/>
                  <input name="whiteboard" type="checkbox" className="form-check-input" id="whiteboard"
                  value={this.state.HasWhiteboard} onClick={() => this.toggleCheck('HasWhiteboard')} defaultChecked/>
                  <label className="form-check-label" for="whiteboard" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.WhiteBoard}</label><br/>
                  <input name="visualizer" type="checkbox" className="form-check-input" id="visualizer"
                  value={this.state.HasVisualizer} onClick={() => this.toggleCheck('HasVisualizer')} defaultChecked/>
                  <label className="form-check-label" for="visualizer" style={textColor}>{language[LanguageStore.lang].reservationForm.Amenities.Visualizer}</label><br/>
                </div>
              </div>
            </div>





          <center><button type="submit" value="Submit" className="btn btn-info">
          {language[LanguageStore.lang].Main.Search}</button> </center>
        </form>
      </div>
      
    )
  }
}

export default withRouter(ReservationForm)
