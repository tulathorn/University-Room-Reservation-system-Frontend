import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'


class AddForm extends React.Component {
  
  componentDidMount() {
    RoomStore.resetAddForm()
  }
  constructor(props) {
    super(props);

    this.state = {
      
      HasTeacherComputers: true,
      HasStudentComputers: true,
      HasProjector: true,
      HasAirConditioner: true,
      HasWhiteboard: true,
      HasVisualizer: true,
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: true,
      Sunday: true,
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: ''};
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(field,value) {
    this.setState(state => ({ [field]: value }));
  }

  toggleCheck = (field) => {
    this.setState(state => ({ [field]: !state[field] }));
  };

  reformDatas= () => {
    RoomStore.setValue('ClosingDay', '')
    this.state.Monday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Tuesday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Wednesday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Thursday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Friday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Saturday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    this.state.Sunday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
    RoomStore.setEquipment('HasTeacherComputers', this.state.HasTeacherComputers)
    RoomStore.setEquipment('HasStudentComputers', this.state.HasStudentComputers)
    RoomStore.setEquipment('HasProjector', this.state.HasProjector)
    RoomStore.setEquipment('HasAirConditioner', this.state.HasAirConditioner)
    RoomStore.setEquipment('HasWhiteboard', this.state.HasWhiteboard)
    RoomStore.setEquipment('HasVisualizer', this.state.HasVisualizer)
    RoomStore.setValue('OpenTime', this.state.fromhr+':'+this.state.frommin)
    RoomStore.setValue('CloseTime', this.state.tohr+':'+this.state.tomin)
    console.log(RoomStore.roomInfo)
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    RoomStore.addRoom()
    this.addClick()
  }

	addClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'This room has been added',
      text: "The page will be reload!",
      showConfirmButton: true,
      preConfirm: () => {
        window.location.reload();
        }
    })
  }


  



  @observer
  render() {
    return (
        <div className="card">
          <div className="card-body">
          
          
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              {language[localStorage.getItem('language')].addForm.RoomID}
                <input name="roomid" type="text" className="form-control" id="roomid" placeholder={language[localStorage.getItem('language')].addForm.RoomID}
                value={RoomStore.roomInfo.RoomName} onChange={e => RoomStore.setValue('RoomName', e.target.value)}/>
              {language[localStorage.getItem('language')].addForm.RoomPhoto}
                <input name="photo" type="file" className="form-control-file" id="photo"
                value={RoomStore.roomInfo.Picture} onChange={e => RoomStore.setValue('Picture', e.target.value)}/>
              {language[localStorage.getItem('language')].addForm.PeopleCapacity}
                <select name="capacity" type="number" className="custom-select" id="capacity"
                value={RoomStore.roomInfo.PeopleCapacity} onChange={e => RoomStore.setValue('PeopleCapacity', e.target.value)}>
                <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
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
              {language[localStorage.getItem('language')].addForm.Building}
                <select name="building" type="text" className="custom-select" id="building"
                value={RoomStore.roomInfo.Building} onChange={e => RoomStore.setValue('Building', e.target.value)}>
                <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
                <option value="Witsawa Watthana">{language[localStorage.getItem('language')].Additional.WitsawaWatthana}</option>
                <option value="CB1">{language[localStorage.getItem('language')].Additional.CB1}</option>
                <option value="CB2">{language[localStorage.getItem('language')].Additional.CB2}</option>
                <option value="CB3">{language[localStorage.getItem('language')].Additional.CB3}</option>
                <option value="CB4">{language[localStorage.getItem('language')].Additional.CB4}</option>
                <option value="CB5">{language[localStorage.getItem('language')].Additional.CB5}</option>
                </select>
              {language[localStorage.getItem('language')].addForm.Floor}
                <input name="floor" type="number" className="form-control" id="floor" placeholder={language[localStorage.getItem('language')].addForm.Floor}
                value={RoomStore.roomInfo.Floor} onChange={e => RoomStore.setValue('Floor', e.target.value)}/>
              {language[localStorage.getItem('language')].addForm.RoomNumber}
                <input name="number" type="number" className="form-control" id="number" placeholder={language[localStorage.getItem('language')].addForm.RoomNumber}
                value={RoomStore.roomInfo.RoomNumber} onChange={e => RoomStore.setValue('RoomNumber', e.target.value)}/>
              </div>
              <div className="col-md-6 col-sm-12">
              {language[localStorage.getItem('language')].addForm.OperatingDay}
                <div className="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="monday" type="checkbox" className="form-check-input" id="monday"
                      value={this.state.Monday} onClick={() => this.toggleCheck('Monday')} defaultChecked/>
                      <label className="form-check-label" for="monday">{language[localStorage.getItem('language')].addForm.Day.Monday}</label><br/>
                      <input name="tuesday" type="checkbox" className="form-check-input" id="tuesday"
                      alue={this.state.Tuesday} onClick={() => this.toggleCheck('Tuesday')} defaultChecked/>
                      <label className="form-check-label" for="tuesday">{language[localStorage.getItem('language')].addForm.Day.Tuesday}</label><br/>
                      <input name="wednesday" type="checkbox" className="form-check-input" id="wednesday"
                      value={this.state.Wednesday} onClick={() => this.toggleCheck('Wednesday')} defaultChecked/>
                      <label className="form-check-label" for="wednesday">{language[localStorage.getItem('language')].addForm.Day.Wednesday}</label><br/>
                      <input name="thursday" type="checkbox" className="form-check-input" id="thursday"
                      value={this.state.Thursday} onClick={() => this.toggleCheck('Thursday')} defaultChecked/>
                      <label className="form-check-label" for="thursday">{language[localStorage.getItem('language')].addForm.Day.Thursday}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="friday" type="checkbox" className="form-check-input" id="friday"
                      value={this.state.Friday} onClick={() => this.toggleCheck('Friday')} defaultChecked/>
                      <label className="form-check-label" for="friday">{language[localStorage.getItem('language')].addForm.Day.Friday}</label><br/>
                      <input name="saturday" type="checkbox" className="form-check-input" id="saturday"
                      value={this.state.Saturday} onClick={() => this.toggleCheck('Saturday')} defaultChecked/>
                      <label className="form-check-label" for="saturday">{language[localStorage.getItem('language')].addForm.Day.Saturday}</label><br/>
                      <input name="sunday" type="checkbox" className="form-check-input" id="sunday"
                      value={this.state.Sunday} onClick={() => this.toggleCheck('Sunday')} defaultChecked/>
                      <label className="form-check-label" for="sunday">{language[localStorage.getItem('language')].addForm.Day.Sunday}</label><br/>
                    </div>
                  </div>
                </div>
                <hr className="my-4" color="black" />
              {language[localStorage.getItem('language')].addForm.OperatingTime}
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                  {language[localStorage.getItem('language')].addForm.From}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="fromhr" type="number" className="custom-select" id="fromhr"
                    value={this.state.fromhr} onChange={e => this.handleChange('fromhr',e.target.value)}>
                    <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
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
                    value={this.state.frommin} onChange={e => this.handleChange('frommin',e.target.value)}>
                    <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    {language[localStorage.getItem('language')].addForm.To}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="tohr" type="number" className="custom-select" id="tohr"
                    vvalue={this.state.tohr} onChange={e => this.handleChange('tohr',e.target.value)}>
                    <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
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
                    value={this.state.tomin} onChange={e => this.handleChange('tomin',e.target.value)}>
                    <option>{language[localStorage.getItem('language')].Additional.Choose}</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <hr className="my-4" color="black" />
              {language[localStorage.getItem('language')].addForm.Amenity}
                <div className="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="teachercom" type="checkbox" className="form-check-input" id="teachercom"
                      value={this.state.HasTeacherComputers} onClick={() => this.toggleCheck('HasTeacherComputers')} defaultChecked/>
                      <label className="form-check-label" for="teachercom">{language[localStorage.getItem('language')].addForm.Amenities.TeacherComputer}</label><br/>
                      <input name="studentcom" type="checkbox" className="form-check-input" id="studentcom"
                      value={this.state.HasStudentComputers} onClick={() => this.toggleCheck('HasStudentComputers')} defaultChecked/>
                      <label className="form-check-label" for="studentcom">{language[localStorage.getItem('language')].addForm.Amenities.StudentComputer}</label><br/>
                      <input name="aircon" type="checkbox" className="form-check-input" id="aircon"
                      value={this.state.HasAirConditioner} onClick={() => this.toggleCheck('HasAirConditioner')} defaultChecked/>
                      <label className="form-check-label" for="aircon">{language[localStorage.getItem('language')].addForm.Amenities.AirConditioner}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="projector" type="checkbox" className="form-check-input" id="projector"
                      value={this.state.HasProjector} onClick={() => this.toggleCheck('HasProjector')} defaultChecked/>
                      <label className="form-check-label" for="projector">{language[localStorage.getItem('language')].addForm.Amenities.Projector}</label><br/>
                      <input name="whiteboard" type="checkbox" className="form-check-input" id="whiteboard"
                      value={this.state.HasWhiteboard} onClick={() => this.toggleCheck('HasWhiteboard')} defaultChecked/>
                      <label className="form-check-label" for="whiteboard">{language[localStorage.getItem('language')].addForm.Amenities.WhiteBoard}</label><br/>
                      <input name="visualizer" type="checkbox" className="form-check-input" id="visualizer"
                      value={this.state.HasVisualizer} onClick={() => this.toggleCheck('HasVisualizer')} defaultChecked/>
                      <label className="form-check-label" for="visualizer">{language[localStorage.getItem('language')].addForm.Amenities.Visualizer}</label><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <br/><center>
              <button type="submit" value="Submit" className="btn btn-info">
                {language[localStorage.getItem('language')].addForm.Submit}
              </button> </center>
            </form>
          </div>
        </div>
    )
  }
}

export default AddForm
