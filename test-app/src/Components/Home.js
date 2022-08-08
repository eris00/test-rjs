import React from 'react'
import { Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
function Home() {
  return (
    <>
    
        <Box sx={{marginTop:'30vh'}}>
            <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={10}>
                <Link style={{width:"70vh", marginLeft:"43%", textDecoration:"none"}} to="/scan"><Button variant="contained" sx={{width:"60%"}}>Scan</Button></Link>
                <Link style={{width:"70vh", marginLeft:"43%", textDecoration:"none"}} to="/about"><Button variant="contained" sx={{width:"60%"}}>About us</Button></Link>
            </Stack>
        </Box>
    </>
  )
}

export default Home