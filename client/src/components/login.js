import React from 'react'
import googlebutton from "../../src/googlebutton.png"

const Login =()=>{
    return(
        <button className="button-clear">
            <img src={googlebutton} alt="Login with google"></img>
        </button>
    )
}

export default Login