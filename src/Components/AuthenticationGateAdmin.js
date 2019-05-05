import React from 'react'



const AuthenticationGate = props =>
localStorage.getItem('token') && parseInt(localStorage.IsAdmin) ? <div>{props.children}</div> : <div>{localStorage.clear()}{window.location="/ad_login"}</div>





export default AuthenticationGate
