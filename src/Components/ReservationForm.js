import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import language from '../languages.json'
import { observer } from 'mobx-react'
import Swal from 'sweetalert2'
import ReservationStore from '../stores/ReservationStore'
import moment from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

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

@observer
class ReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.state = {
      selectedDay: undefined,
      HasTeacherComputers: false,
      HasStudentComputers: false,
      HasProjector: false,
      HasAirConditioner: false,
      HasWhiteboard: false,
      HasVisualizer: false
    }
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day })
    console.log(moment(day).format('YYYY-MM-DD'))
    ReservationStore.setSearch('Date', moment(day).format('YYYY-MM-DD'))
  }

  setForm = name => event => {
    this.props.setField(name, event.target.value)
  }

  componentDidMount() {
    ReservationStore.cleanSearchConfig()
    ReservationStore.cleanSearch()
  }
  toggleCheck = field => {
    this.setState(state => ({ [field]: !state[field] }))
  }

  reformDatas = () => {
    ReservationStore.setSearch('HasTeacherComputers', this.state.HasTeacherComputers)
    ReservationStore.setSearch('HasStudentComputers', this.state.HasStudentComputers)
    ReservationStore.setSearch('HasProjector', this.state.HasProjector)
    ReservationStore.setSearch('HasAirConditioner', this.state.HasAirConditioner)
    ReservationStore.setSearch('HasWhiteboard', this.state.HasWhiteboard)
    ReservationStore.setSearch('HasVisualizer', this.state.HasVisualizer)
    localStorage.setItem('ScheduleDate', ReservationStore.searchTemp.Date)
    localStorage.setItem(
      'ScheduleFrom',
      ReservationStore.searchTemp.fromhr + ':' + ReservationStore.searchTemp.frommin
    )
    localStorage.setItem(
      'ScheduleTo',
      ReservationStore.searchTemp.tohr + ':' + ReservationStore.searchTemp.tomin
    )
    ReservationStore.setSearchConfigTime('Date', ReservationStore.searchTemp.Date)
    ReservationStore.setSearchConfigTime('StartTime', localStorage.getItem('ScheduleFrom'))
    ReservationStore.setSearchConfigTime('EndTime', localStorage.getItem('ScheduleTo'))
    ReservationStore.searchTemp.Building
      ? ReservationStore.setSearchConfigRoom('Building', ReservationStore.searchTemp.Building)
      : console.log()
    ReservationStore.searchTemp.PeopleCapacity
      ? ReservationStore.setSearchConfigRoom(
          'PeopleCapacity',
          ReservationStore.searchTemp.PeopleCapacity
        )
      : console.log()
    this.state.HasTeacherComputers
      ? ReservationStore.setSearchConfigEquip('HasTeacherComputers', 1)
      : console.log()
    this.state.HasStudentComputers
      ? ReservationStore.setSearchConfigEquip('HasStudentComputers', 1)
      : console.log()
    this.state.HasProjector
      ? ReservationStore.setSearchConfigEquip('HasProjector', 1)
      : console.log()
    this.state.HasAirConditioner
      ? ReservationStore.setSearchConfigEquip('HasAirConditioner', 1)
      : console.log()
    this.state.HasWhiteboard
      ? ReservationStore.setSearchConfigEquip('HasWhiteboard', 1)
      : console.log()
    this.state.HasVisualizer
      ? ReservationStore.setSearchConfigEquip('HasVisualizer', 1)
      : console.log()
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    this.reformDatas()
    console.log('Search config: ', ReservationStore.searchConfig)
    console.log('Before Sumbit', ReservationStore.searchTemp)
    if (
      ReservationStore.searchTemp.Date &&
      ReservationStore.searchTemp.fromhr &&
      ReservationStore.searchTemp.frommin &&
      ReservationStore.searchTemp.tohr &&
      ReservationStore.searchTemp.tomin
    ) {
      if (moment(moment(ReservationStore.searchTemp.Date).format('YYYY-MM-DD')).isAfter()) {
        let tempStart = parseInt(ReservationStore.searchTemp.fromhr)
        let tempEnd = parseInt(ReservationStore.searchTemp.tohr)
        if (tempEnd >= tempStart) {
          this.search()
        } else {
          this.timeWarn()
        }
      } else {
        this.timeWarn()
      }
    } else {
      this.warned()
    }
  }

  timeWarn = () => {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: language[localStorage.getItem('language')].Swal.InvalidTime,
      text: language[localStorage.getItem('language')].Swal.InvalidTimeMsg,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  warned = () => {
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.MissInfo,
      text: language[localStorage.getItem('language')].Swal.FillDateTime,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  search = async () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div className="jumbotron" style={jumbotronStyle}>
        <Heading> {language[localStorage.getItem('language')].reservationForm.FindRoom} </Heading>
        <hr className="my-4" color="white" />
        <SubHeading>
          {' '}
          {language[localStorage.getItem('language')].reservationForm.Info}:{' '}
        </SubHeading>
        <form action="#" onSubmit={e => this.onSubmit(e)}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <NormalText>
                {language[localStorage.getItem('language')].reservationForm.Date}
              </NormalText>
              <DayPickerInput
                inputProps={{ className: 'form-control' }}
                style={{ width: '100%' }}
                onDayChange={day => {
                  console.log(moment(day).format('YYYY-MM-DD'))
                  ReservationStore.setSearch('Date', moment(day).format('YYYY-MM-DD'))
                }}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <NormalText>
                {language[localStorage.getItem('language')].reservationForm.Building}
              </NormalText>
              <select
                name="building"
                type="text"
                className="custom-select"
                id="building"
                value={ReservationStore.searchTemp.Building}
                onChange={e => ReservationStore.setSearch('Building', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
                <option value="Witsawa Watthana">
                  {language[localStorage.getItem('language')].Additional.WitsawaWatthana}
                </option>
                <option value="CB1">
                  {language[localStorage.getItem('language')].Additional.CB1}
                </option>
                <option value="CB2">
                  {language[localStorage.getItem('language')].Additional.CB2}
                </option>
                <option value="CB3">
                  {language[localStorage.getItem('language')].Additional.CB3}
                </option>
                <option value="CB4">
                  {language[localStorage.getItem('language')].Additional.CB4}
                </option>
                <option value="CB5">
                  {language[localStorage.getItem('language')].Additional.CB5}
                </option>
              </select>
            </div>
            <div className="col-md-4 col-sm-12">
              <NormalText>
                {language[localStorage.getItem('language')].reservationForm.Size}
              </NormalText>
              <select
                name="capacity"
                type="number"
                className="custom-select"
                id="capacity"
                value={ReservationStore.searchTemp.PeopleCapacity}
                onChange={e => ReservationStore.setSearch('PeopleCapacity', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
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
          <SubHeading>
            {' '}
            {language[localStorage.getItem('language')].reservationForm.Time}:{' '}
          </SubHeading>

          <div className="row">
            <div className="col-md-2 col-sm-12">
              <NormalText>
                {language[localStorage.getItem('language')].reservationForm.From}
              </NormalText>
            </div>
            <div className="col-md-3 col-sm-12">
              <select
                name="fromhr"
                type="number"
                className="custom-select"
                id="fromhr"
                value={ReservationStore.searchTemp.fromhr}
                onChange={e => ReservationStore.setSearch('fromhr', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
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
              <center>
                <NormalText> : </NormalText>
              </center>
            </div>
            <div className="col-md-3 col-sm-12">
              <select
                name="frommin"
                type="number"
                className="custom-select"
                id="frommin"
                value={ReservationStore.searchTemp.frommin}
                onChange={e => ReservationStore.setSearch('frommin', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <NormalText>
                {language[localStorage.getItem('language')].reservationForm.To}
              </NormalText>
            </div>
            <div className="col-md-3 col-sm-12">
              <select
                name="tohr"
                type="number"
                className="custom-select"
                id="tohr"
                value={ReservationStore.searchTemp.tohr}
                onChange={e => ReservationStore.setSearch('tohr', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
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
              <center>
                <NormalText> : </NormalText>
              </center>
            </div>
            <div className="col-md-3 col-sm-12">
              <select
                name="tomin"
                type="number"
                className="custom-select"
                id="tomin"
                value={ReservationStore.searchTemp.tomin}
                onChange={e => ReservationStore.setSearch('tomin', e.target.value)}
              >
                <option value="" disabled selected>
                  {language[localStorage.getItem('language')].Additional.Choose}
                </option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <hr className="my-4" color="white" />
          <SubHeading>
            {' '}
            {language[localStorage.getItem('language')].reservationForm.Amenity}:{' '}
          </SubHeading>

          <div className="form-check">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <input
                  name="teachercom"
                  type="checkbox"
                  className="form-check-input"
                  id="teachercom"
                  value={this.state.HasTeacherComputers}
                  onClick={() => this.toggleCheck('HasTeacherComputers')}
                />
                <label className="form-check-label" for="teachercom" style={textColor}>
                  {
                    language[localStorage.getItem('language')].reservationForm.Amenities
                      .TeacherComputer
                  }
                </label>
                <br />
                <input
                  name="studentcom"
                  type="checkbox"
                  className="form-check-input"
                  id="studentcom"
                  value={this.state.HasStudentComputers}
                  onClick={() => this.toggleCheck('HasStudentComputers')}
                />
                <label className="form-check-label" for="studentcom" style={textColor}>
                  {
                    language[localStorage.getItem('language')].reservationForm.Amenities
                      .StudentComputer
                  }
                </label>
                <br />
                <input
                  name="aircon"
                  type="checkbox"
                  className="form-check-input"
                  id="aircon"
                  value={this.state.HasAirConditioner}
                  onClick={() => this.toggleCheck('HasAirConditioner')}
                />
                <label className="form-check-label" for="aircon" style={textColor}>
                  {
                    language[localStorage.getItem('language')].reservationForm.Amenities
                      .AirConditioner
                  }
                </label>
                <br />
              </div>
              <div className="col-md-6 col-sm-12">
                <input
                  name="projector"
                  type="checkbox"
                  className="form-check-input"
                  id="projector"
                  value={this.state.HasProjector}
                  onClick={() => this.toggleCheck('HasProjector')}
                />
                <label className="form-check-label" for="projector" style={textColor}>
                  {language[localStorage.getItem('language')].reservationForm.Amenities.Projector}
                </label>
                <br />
                <input
                  name="whiteboard"
                  type="checkbox"
                  className="form-check-input"
                  id="whiteboard"
                  value={this.state.HasWhiteboard}
                  onClick={() => this.toggleCheck('HasWhiteboard')}
                />
                <label className="form-check-label" for="whiteboard" style={textColor}>
                  {language[localStorage.getItem('language')].reservationForm.Amenities.WhiteBoard}
                </label>
                <br />
                <input
                  name="visualizer"
                  type="checkbox"
                  className="form-check-input"
                  id="visualizer"
                  value={this.state.HasVisualizer}
                  onClick={() => this.toggleCheck('HasVisualizer')}
                />
                <label className="form-check-label" for="visualizer" style={textColor}>
                  {language[localStorage.getItem('language')].reservationForm.Amenities.Visualizer}
                </label>
                <br />
              </div>
            </div>
          </div>

          <center>
            <button type="submit" value="Submit" className="btn btn-info">
              {language[localStorage.getItem('language')].Main.Search}
            </button>{' '}
          </center>
        </form>
      </div>
    )
  }
}

export default withRouter(ReservationForm)
