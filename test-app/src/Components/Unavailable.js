import React from 'react'
import {  Link } from 'react-router-dom';
import { Typography }  from '@mui/material';
function Unavailable() {
  return (
    <>
      <div>Unavailable product</div>
      <Link to='/'><Typography sx={{fontSize:'1.5em', textAlign:'center'}}>Go back to home</Typography></Link>
    </>
  )
}

export default Unavailable