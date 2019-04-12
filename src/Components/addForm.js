import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'

import AuthenticationGate from '../Components/AuthenticationGate'


class AddForm extends React.Component {
  async componentWillMount() {
    await RoomStore.resetAddForm()
  }

  


  onSubmit = e => {
    e.preventDefault()
    RoomStore.addRoom()
    window.alert(RoomStore.verify)
    window.alert(RoomStore.roomDatas)
  }
/*  
  toggleCheckboxValue = () => {
    this.setState({checkBoxValue: !this.state.checkboxValue});
  }*/

	addClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'This room has been added',
      showConfirmButton: false,
      timer: 1500
    })
  }
  @observer
  render() {
    return (
      <AuthenticationGate>
        <div className="card">
          <div className="card-body">
          

          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              {language[LanguageStore.lang].addForm.RoomID}
                <input name="roomid" type="text" className="form-control" id="roomid" placeholder="Room ID"
                value={RoomStore.roomInfo.roomid} onChange={e => RoomStore.setValue('roomid', e.target.value)}/>
              {language[LanguageStore.lang].addForm.RoomPhoto}
                <input name="photo" type="file" className="form-control-file" id="photo"
                value={RoomStore.roomInfo.photo} onChange={e => RoomStore.setValue('photo', e.target.value)}/>
              {language[LanguageStore.lang].addForm.PeopleCapacity}
                <select name="capacity" type="number" className="custom-select" id="capacity"
                value={RoomStore.roomInfo.capacity} onChange={e => RoomStore.setValue('capacity', e.target.value)}>
                <option>Choose...</option>
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
              {language[LanguageStore.lang].addForm.Building}
                <select name="building" type="text" className="custom-select" id="building"
                value={RoomStore.roomInfo.building} onChange={e => RoomStore.setValue('building', e.target.value)}>
                <option>Choose...</option>
                <option value="Witsawa Watthana">Witsawa Watthana</option>
                <option value="CB1">CB1</option>
                <option value="CB2">CB2</option>
                <option value="CB3">CB3</option>
                <option value="CB4">CB4</option>
                <option value="CB5">CB5</option>
                </select>
              {language[LanguageStore.lang].addForm.Floor}
                <input name="floor" type="number" className="form-control" id="floor" placeholder="Floor"
                value={RoomStore.roomInfo.floor} onChange={e => RoomStore.setValue('floor', e.target.value)}/>
              {language[LanguageStore.lang].addForm.RoomNumber}
                <input name="number" type="number" className="form-control" id="number" placeholder="Room Number"
                value={RoomStore.roomInfo.number} onChange={e => RoomStore.setValue('number', e.target.value)}/>
              </div>
              <div className="col-md-6 col-sm-12">
              {language[LanguageStore.lang].addForm.OperatingDay}{/* Day Still Broken */}
                <div className="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="monday" type="checkbox" className="form-check-input" id="monday"
                      checked={RoomStore.roomInfo.roomid} /*onChange={this.toggleCheckboxValue}*//>
                      <label className="form-check-label" for="monday">{language[LanguageStore.lang].addForm.Day.Monday}</label><br/>
                      {/*{RoomStore.roomInfo.roomid ? <p>Yes</p> : <p>No</p>}*/}
                      <input name="tuesday" type="checkbox" className="form-check-input" id="tuesday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="tuesday">{language[LanguageStore.lang].addForm.Day.Tuesday}</label><br/>
                      <input name="wednesday" type="checkbox" className="form-check-input" id="wednesday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="wednesday">{language[LanguageStore.lang].addForm.Day.Wednesday}</label><br/>
                      <input name="thursday" type="checkbox" className="form-check-input" id="thursday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="thursday">{language[LanguageStore.lang].addForm.Day.Thursday}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="friday" type="checkbox" className="form-check-input" id="friday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="friday">{language[LanguageStore.lang].addForm.Day.Friday}</label><br/>
                      <input name="saturday" type="checkbox" className="form-check-input" id="saturday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="saturday">{language[LanguageStore.lang].addForm.Day.Saturday}</label><br/>
                      <input name="sunday" type="checkbox" className="form-check-input" id="sunday"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="sunday">{language[LanguageStore.lang].addForm.Day.Sunday}</label><br/>
                    </div>
                  </div>
                </div>
              {language[LanguageStore.lang].addForm.OperatingTime}
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                  {language[LanguageStore.lang].addForm.From}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="fromhr" type="number" className="custom-select" id="fromhr"
                    value={RoomStore.roomInfo.fromhr} onChange={e => RoomStore.setValue('fromhr', e.target.value)}>
                    <option>Choose...</option>
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
                    :
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="frommin" type="number" className="custom-select" id="frommin"
                    value={RoomStore.roomInfo.frommin} onChange={e => RoomStore.setValue('frommin', e.target.value)}>
                    <option>Choose...</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    {language[LanguageStore.lang].addForm.To}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="tohr" type="number" className="custom-select" id="tohr"
                    value={RoomStore.roomInfo.tohr} onChange={e => RoomStore.setValue('tohr', e.target.value)}>
                    <option>Choose...</option>
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
                    :
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="tomin" type="number" className="custom-select" id="tomin"
                    value={RoomStore.roomInfo.tomin} onChange={e => RoomStore.setValue('tomin', e.target.value)}>
                    <option>Choose...</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
              {language[LanguageStore.lang].addForm.Amenity}
                <div class="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="teachercom" type="checkbox" className="form-check-input" id="teachercom"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="teachercom">{language[LanguageStore.lang].addForm.Amenities.TeacherComputer}</label><br/>
                      <input name="studentcom" type="checkbox" className="form-check-input" id="studentcom"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="studentcom">{language[LanguageStore.lang].addForm.Amenities.StudentComputer}</label><br/>
                      <input name="aircon" type="checkbox" className="form-check-input" id="aircon"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="aircon">{language[LanguageStore.lang].addForm.Amenities.AirConditioner}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="projector" type="checkbox" className="form-check-input" id="projector"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="projector">{language[LanguageStore.lang].addForm.Amenities.Projector}</label><br/>
                      <input name="whiteboard" type="checkbox" className="form-check-input" id="whiteboard"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="whiteboard">{language[LanguageStore.lang].addForm.Amenities.WhiteBoard}</label><br/>
                      <input name="visualizer" type="checkbox" className="form-check-input" id="visualizer"
                      /* Day Still Broken *//>
                      <label className="form-check-label" for="visualizer">{language[LanguageStore.lang].addForm.Amenities.Visualizer}</label><br/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
              <br/><center>
              <button onClick={() => this.addClick()} type="submit" value="Submit" className="btn btn-info">
                {language[LanguageStore.lang].addForm.Submit}
              </button> </center>
            </form>
          </div>
        </div>
      </AuthenticationGate>
    )
  }
}

export default AddForm
