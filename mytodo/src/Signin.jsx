import React from 'react'
import { useState } from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import axios from 'axios'
const Signin = () => {

  const [user, setuser] = useState('')

  const [password, setpassword] = useState('')

   function authen(){
     axios.post('http://localhost:3000/signup', {
      user: user,
      password: password,
    }).then((response) =>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div className='formContainer'>
        <form className='form'>
            <input placeholder = "name" type = "text" className='inputbox' onChange={(e)=>setuser(e.target.value)}/>
            <input placeholder = "password" type = "text"  className='inputbox' onChange={(e)=>setpassword(e.target.value)}/>
        </form>
        <button className='submit' onClick={authen}>Submit</button>
    </div>
  )
}

export default Signin