import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import RoomStore from '../stores/RoomStore'

class EditForm extends React.Component {

  componentWillMount() {
    RoomStore.resetAddForm()
    RoomStore.copyValue(this.props.room)
    RoomStore.resetFilterForm()
  }
  
  reformDatas= () => {
  RoomStore.setValue('ClosingDay', '')
  RoomStore.searchConfig.Monday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Tuesday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Wednesday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Thursday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Friday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Saturday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.Sunday ? RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'0') : RoomStore.setValue('ClosingDay', RoomStore.roomInfo.ClosingDay+'1')
  RoomStore.searchConfig.RoomName ? RoomStore.setValue('RoomName',RoomStore.searchConfig.RoomName) : console.log()
  RoomStore.searchConfig.Photo ? RoomStore.setValue('Photo',RoomStore.searchConfig.Photo) : console.log()
  RoomStore.searchConfig.PeopleCapacity ? RoomStore.setValue('PeopleCapacity',RoomStore.searchConfig.PeopleCapacity) : console.log()
  RoomStore.searchConfig.Building ? RoomStore.setValue('Building',RoomStore.searchConfig.Building) : console.log()
  RoomStore.searchConfig.Floor ? RoomStore.setValue('Floor',RoomStore.searchConfig.Floor) : console.log()
  RoomStore.searchConfig.RoomNumber ? RoomStore.setValue('RoomNumber',RoomStore.searchConfig.RoomNumber) : console.log()
  RoomStore.setEquipment('HasTeacherComputers', RoomStore.searchConfig.HasTeacherComputers ? 1 : 0)
  RoomStore.setEquipment('HasStudentComputers', RoomStore.searchConfig.HasStudentComputers ? 1 : 0)
  RoomStore.setEquipment('HasProjector', RoomStore.searchConfig.HasProjector ? 1 : 0)
  RoomStore.setEquipment('HasAirConditioner', RoomStore.searchConfig.HasAirConditioner ? 1 : 0)
  RoomStore.setEquipment('HasWhiteboard', RoomStore.searchConfig.HasWhiteboard ? 1 : 0)
  RoomStore.setEquipment('HasVisualizer', RoomStore.searchConfig.HasVisualizer ? 1 : 0)
  RoomStore.searchConfig.fromhr ? console.log() : RoomStore.setConfig('fromhr',RoomStore.roomInfo.OpenTime.slice(0,2))
  RoomStore.searchConfig.frommin ? console.log() : RoomStore.setConfig('frommin',RoomStore.roomInfo.OpenTime.slice(3,5))
  RoomStore.searchConfig.tohr ? console.log() : RoomStore.setConfig('tohr',RoomStore.roomInfo.CloseTime.slice(0,2))
  RoomStore.searchConfig.tomin ? console.log() : RoomStore.setConfig('tomin',RoomStore.roomInfo.CloseTime.slice(3,5))
  RoomStore.setValue('OpenTime', RoomStore.searchConfig.fromhr +':'+RoomStore.searchConfig.frommin)
  RoomStore.setValue('CloseTime', RoomStore.searchConfig.tohr +':'+RoomStore.searchConfig.tomin)
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    this.saveClick()
  }

  backClick = e => {
    e.preventDefault()
    window.location = "/ad_room_info";
  }

	saveClick = () =>{ 
      Swal.fire({
      position: 'center',
      type: 'question',
      title: 'Comfirm update room ' + RoomStore.roomInfo.RoomName,
      text: 'Make sure to check on Operating Days and Amenities',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if(result.value){
        RoomStore.updateRoom()
        Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Booking completed',
        text: "Redirect to room information page!",
        focusConfirm: true,
        showConfirmButton: true,
        preConfirm: () => {
          window.location = "/ad_room_info";
          }
        })
      }
      
    })
  }
  
  





  render() {
    return (
      <div className="card">
          <div className="card-body">
          
          
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              {language[localStorage.getItem('language')].editForm.RoomID}
                <input name="roomid" type="text" className="form-control" id="roomid" placeholder={RoomStore.roomInfo.RoomName}
                value={RoomStore.searchConfig.RoomName} onChange={e => RoomStore.setConfig('RoomName', e.target.value)}/>
              {language[localStorage.getItem('language')].editForm.RoomPhoto}
                <input name="photo" type="file" className="form-control-file" id="photo"
                value={RoomStore.searchConfig.Picture} onChange={e => RoomStore.setConfig('Picture', e.target.value)}/>
              {language[localStorage.getItem('language')].editForm.PeopleCapacity}
                <select name="capacity" type="number" className="custom-select" id="capacity"
                value={RoomStore.searchConfig.PeopleCapacity} onChange={e => RoomStore.setConfig('PeopleCapacity', e.target.value)}>
                <option defaultValue={RoomStore.roomInfo.PeopleCapacity}>{RoomStore.roomInfo.PeopleCapacity}</option>
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
              {language[localStorage.getItem('language')].editForm.Building}
                <select name="building" type="text" className="custom-select" id="building"
                value={RoomStore.searchConfig.Building} onChange={e => RoomStore.setConfig('Building', e.target.value)}>
                <option defaultValue={RoomStore.roomInfo.Building}>{RoomStore.roomInfo.Building}</option>
                <option value="Witsawa Watthana">{language[localStorage.getItem('language')].Additional.WitsawaWatthana}</option>
                <option value="CB1">{language[localStorage.getItem('language')].Additional.CB1}</option>
                <option value="CB2">{language[localStorage.getItem('language')].Additional.CB2}</option>
                <option value="CB3">{language[localStorage.getItem('language')].Additional.CB3}</option>
                <option value="CB4">{language[localStorage.getItem('language')].Additional.CB4}</option>
                <option value="CB5">{language[localStorage.getItem('language')].Additional.CB5}</option>
                </select>
              {language[localStorage.getItem('language')].editForm.Floor}
                <input name="floor" type="number" className="form-control" id="floor" placeholder={RoomStore.roomInfo.Floor}
                value={RoomStore.searchConfig.Floor} onChange={e => RoomStore.setConfig('Floor', e.target.value)}/>
              {language[localStorage.getItem('language')].editForm.RoomNumber}
                <input name="number" type="number" className="form-control" id="number" placeholder={RoomStore.roomInfo.RoomNumber}
                value={RoomStore.searchConfig.RoomNumber} onChange={e => RoomStore.setConfig('RoomNumber', e.target.value)}/>
              </div>
              <div className="col-md-6 col-sm-12">
              {language[localStorage.getItem('language')].editForm.OperatingDay}
                <div className="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="monday" type="checkbox" className="form-check-input" id="monday"
                      value={RoomStore.searchConfig.Monday} onChange={e => RoomStore.flipConfig('Monday')}/>
                      <label className="form-check-label" for="monday">{language[localStorage.getItem('language')].addForm.Day.Monday}</label><br/>
                      <input name="tuesday" type="checkbox" className="form-check-input" id="tuesday"
                      value={RoomStore.searchConfig.Tuesday} onChange={e => RoomStore.flipConfig('Tuesday')}/>
                      <label className="form-check-label" for="tuesday">{language[localStorage.getItem('language')].addForm.Day.Tuesday}</label><br/>
                      <input name="wednesday" type="checkbox" className="form-check-input" id="wednesday"
                      value={RoomStore.searchConfig.Wednesday} onChange={e => RoomStore.flipConfig('Wednesday')}/>
                      <label className="form-check-label" for="wednesday">{language[localStorage.getItem('language')].addForm.Day.Wednesday}</label><br/>
                      <input name="thursday" type="checkbox" className="form-check-input" id="thursday"
                      value={RoomStore.searchConfig.Thursday} onChange={e => RoomStore.flipConfig('Thursday')}/>
                      <label className="form-check-label" for="thursday">{language[localStorage.getItem('language')].addForm.Day.Thursday}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="friday" type="checkbox" className="form-check-input" id="friday"
                      value={RoomStore.searchConfig.Friday} onChange={e => RoomStore.flipConfig('Friday')}/>
                      <label className="form-check-label" for="friday">{language[localStorage.getItem('language')].addForm.Day.Friday}</label><br/>
                      <input name="saturday" type="checkbox" className="form-check-input" id="saturday"
                      value={RoomStore.searchConfig.Saturday} onChange={e => RoomStore.flipConfig('Saturday')}/>
                      <label className="form-check-label" for="saturday">{language[localStorage.getItem('language')].addForm.Day.Saturday}</label><br/>
                      <input name="sunday" type="checkbox" className="form-check-input" id="sunday"
                      value={RoomStore.searchConfig.Sunday} onChange={e => RoomStore.flipConfig('Sunday')}/>
                      <label className="form-check-label" for="sunday">{language[localStorage.getItem('language')].addForm.Day.Sunday}</label><br/>
                    </div>
                  </div>
                </div>
                
                <hr className="my-4" color="black" />
              {language[localStorage.getItem('language')].editForm.OperatingTime}
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                  {language[localStorage.getItem('language')].editForm.From}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="fromhr" type="number" className="custom-select" id="fromhr"
                    value={RoomStore.searchConfig.fromhr} onChange={e => RoomStore.setConfig('fromhr',e.target.value)}>
                    <option defaultValue={RoomStore.roomInfo.OpenTime.slice(0,2)}>{RoomStore.roomInfo.OpenTime.slice(0,2)}</option>
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
                    value={RoomStore.searchConfig.frommin} onChange={e => RoomStore.setConfig('frommin',e.target.value)}>
                    <option defaultValue={RoomStore.roomInfo.OpenTime.slice(3,5)}>{RoomStore.roomInfo.OpenTime.slice(3,5)}</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    {language[localStorage.getItem('language')].editForm.To}
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <select name="tohr" type="number" className="custom-select" id="tohr"
                    value={RoomStore.searchConfig.tohr} onChange={e => RoomStore.setConfig('tohr',e.target.value)}>
                    <option defaultValue={RoomStore.roomInfo.CloseTime.slice(0,2)}>{RoomStore.roomInfo.CloseTime.slice(0,2)}</option>
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
                    value={RoomStore.searchConfig.tomin} onChange={e => RoomStore.setConfig('tomin',e.target.value)}>
                    <option defaultValue={RoomStore.roomInfo.CloseTime.slice(3,5)}>{RoomStore.roomInfo.CloseTime.slice(3,5)}</option>
                    <option value="00">00</option>
                    <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <hr className="my-4" color="black" />
              {language[localStorage.getItem('language')].editForm.Amenity}
                <div className="form-check">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="teachercom" type="checkbox" className="form-check-input" id="teachercom"
                      value={RoomStore.searchConfig.HasTeacherComputers} onChange={e => RoomStore.flipConfig('HasTeacherComputers')}/>
                      <label className="form-check-label" for="teachercom">{language[localStorage.getItem('language')].addForm.Amenities.TeacherComputer}</label><br/>
                      <input name="studentcom" type="checkbox" className="form-check-input" id="studentcom"
                      value={RoomStore.searchConfig.HasStudentComputers} onChange={e => RoomStore.flipConfig('HasStudentComputers')}/>
                      <label className="form-check-label" for="studentcom">{language[localStorage.getItem('language')].addForm.Amenities.StudentComputer}</label><br/>
                      <input name="aircon" type="checkbox" className="form-check-input" id="aircon"
                      value={RoomStore.searchConfig.HasAirConditioner} onChange={e => RoomStore.flipConfig('HasAirConditioner')}/>
                      <label className="form-check-label" for="aircon">{language[localStorage.getItem('language')].addForm.Amenities.AirConditioner}</label><br/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="projector" type="checkbox" className="form-check-input" id="projector"
                      value={RoomStore.searchConfig.HasProjector} onChange={e => RoomStore.flipConfig('HasProjector')}/>
                      <label className="form-check-label" for="projector">{language[localStorage.getItem('language')].addForm.Amenities.Projector}</label><br/>
                      <input name="whiteboard" type="checkbox" className="form-check-input" id="whiteboard"
                      value={RoomStore.searchConfig.HasWhiteboard} onChange={e => RoomStore.flipConfig('HasWhiteboard')}/>
                      <label className="form-check-label" for="whiteboard">{language[localStorage.getItem('language')].addForm.Amenities.WhiteBoard}</label><br/>
                      <input name="visualizer" type="checkbox" className="form-check-input" id="visualizer"
                      value={RoomStore.searchConfig.HasVisualizer} onChange={e => RoomStore.flipConfig('HasVisualizer')}/>
                      <label className="form-check-label" for="visualizer">{language[localStorage.getItem('language')].addForm.Amenities.Visualizer}</label><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <br/><center>
              <button type="submit" value="Submit" className="btn btn-info">
                {language[localStorage.getItem('language')].editForm.Submit}
              </button>
              <button onClick={e => this.backClick(e)} className="btn btn-secondary">
                {language[localStorage.getItem('language')].contactCard.Back}
              </button> </center>
            </form>
          </div>
        </div>

    )
  }
}

export default EditForm
