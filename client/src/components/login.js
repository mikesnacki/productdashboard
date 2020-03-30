import React from 'react'
import googlebutton from "../../src/googlebutton.png"
import axios from 'axios'

const Login =()=>{

    const login = e =>{
        e.preventDefault()

        axios.get(`/api/auth/google/callback`)
        .then(resp=>{
            console.log(resp)
        })
    }


    return(
        <button 
            type="button"
            onClick={login}
            className="button-clear">
            <img src={googlebutton} alt="Login with google"></img>
        </button>
    )
}

export default Login