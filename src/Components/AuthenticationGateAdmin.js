import React from 'react'
import { Redirect } from 'react-router-dom'
import language from '../languages.json'
import Swal from 'sweetalert2'

const notAdmin = () => {
  localStorage.clear()
  Swal.fire({
    position: 'center',
    type: 'error',
    title: language[localStorage.getItem('language')].Swal.NotAdmin,
    focusConfirm: true,
    showConfirmButton: true,
    confirmButtonText: language[localStorage.getItem('language')].Swal.OK,
    preConfirm: () => {
      window.location = "/ad_login";
    }
  })
}

const AuthenticationGate = props =>
  localStorage.getItem('token') && localStorage.getItem('IsAdmin') ? <div>{props.children}</div> : console.log()





export default AuthenticationGate
