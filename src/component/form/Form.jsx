/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'

export default function Form() {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser]= useState({text:"", email:"", password:""})
    const {text, email, password}= user
    

     const inputChange=(e)=>{
        const fildName= e.target.name;
        setUser({...user, [fildName]: e.target.value})
        // if(fildName==="text"){
        //     setUser({text: e.target.value, email, password})
        // }
        // if(fildName==="email"){
        //     setUser({text, email: e.target.value, password})
        // }
        // if(fildName==="password"){
        //     setUser({text, email, password: e.target.value})
        // }

     }

    
const handleSubmit=(e)=>{
    console.log(user)
    e.preventDefault()
    
}



  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>Full Name:</label>
            <input onChange={inputChange} value={text} type="text" name='text'  placeholder='Your Name Here' required/> <br />
            <label >Email:</label>
            <input onChange={inputChange} value={email} type="email" name='email'  placeholder='Email Here' required/> <br />
            <label >Password</label>
            <input onChange={inputChange} value={password} type="password" name='password'  placeholder='Password' required/> <br />

            <button type='submit'>Register</button>

        </form>
    </div>
  )
}
