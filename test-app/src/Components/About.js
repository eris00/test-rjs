import React from 'react'
import { Typography, Box }  from '@mui/material/';
import {  Link } from 'react-router-dom';

function About() {
  return (

    <Box>
      <h1>About us</h1>
      <h3>Coinis</h3>
      <Typography>Nam et eros eu dolor finibus sagittis nec quis ipsum. Nulla eu finibus nisi. Morbi maximus dapibus quam, a pulvinar odio malesuada eget. Suspendisse ultricies velit quis arcu rhoncus pretium. Phasellus et sollicitudin mauris. Nam eu convallis massa, vitae accumsan nibh. Maecenas molestie aliquet felis ac vulputate. Nam molestie vulputate nisi, et egestas diam lacinia quis.</Typography>
      <Link to='/'><Typography sx={{fontSize:'1.5em', textAlign:'center'}}>Go back to home</Typography></Link>
    </Box>

  )
}

export default About