import React from 'react'
import { Redirect } from 'react-router-dom'

const AuthenticationGate = props =>
  localStorage.getItem('token') ? <div>{props.children}</div> : <Redirect to="/login" />

export default AuthenticationGate
