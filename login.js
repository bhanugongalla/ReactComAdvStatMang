import React from 'react'
import {useState} from 'react'
import axios from 'axios'
export default function Login() {


  const [email,setEmail] =useState();
  const [password,setPass] =useState();
  const url="http://localhost:8082/sign";

  const handleSubmit = () =>{
  
    axios
    .post(url,{email:email,password:password})
    .then((result) => console.log(result))
    .catch((err)=>console.log(err))
    };

return(
    
    <div>
      email:<input type="text" name="name" onChange={(e) => setEmail(e.target.value)} />
    password: <input type='password' onChange={(e) => setPass(e.target.value)} /><br/>
    <button onClick={handleSubmit}>submit</button>
    </div>
  
  )
}
