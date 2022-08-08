import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target)
}

function Scan() {
  return (
    <Box sx={{ width:"100%", marginTop:"60%", marginLeft:"5%"}}>
      <form onSubmit={handleSubmit}>
        <input style={{padding:"20px", width:"60%"}}/>
        <input type="submit" value="Submit" style={{padding:"20px", width:"20%"}} />
      </form>
    </Box>
  )
}

export default Scan