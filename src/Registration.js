import React,{useState}from 'react'
import {TextField,Button} from "@mui/material"




function Registration() {

  const [name,setName] = useState("");

  const add = () => {
    console.log(name);
  };
  return (
      
    <div className='reg'>
      <h1>Registration</h1>
      <TextField id="filled-basic" label="Name" variant="filled" /><br/>
      <TextField id="filled-basic" label="Email" variant="filled" /><br/>
      <TextField id="filled-basic" label="Password" variant="filled" /><br/>
      <TextField id="filled-basic" label="Place" variant="filled" /><br/>
      <div className='button'>
        <Button onClick='add' variant="contained">register</Button>
      </div>

    </div>
  )
}

export default Registration