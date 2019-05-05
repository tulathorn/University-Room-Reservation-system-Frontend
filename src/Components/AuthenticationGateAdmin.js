import React from 'react'
import { Redirect } from 'react-router-dom'
import language from '../languages.json'



const AuthenticationGate = props =>
localStorage.getItem('token') && parseInt(localStorage.IsAdmin) ? <div>{props.children}</div> : <div>{localStorage.clear()}{window.location="/ad_login"}</div>





export default AuthenticationGate
