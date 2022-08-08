import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography }  from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Scan({handleSubmit, queryId, setQueryId, products}) {

  let navigate = useNavigate();


  let handleNavigate = () => {
    if (products) {
      navigate("/product")
    } else {
      navigate("/unavailable")
    }
    
  }

  return (
    
    <Box sx={{ width:"100%", marginTop:"60%", marginLeft:"10%"}}>
    <Typography sx={{ textAlign:'center'}}>Type ID of book:</Typography>
    <form onSubmit={handleSubmit}>
    <TextField 
        sx={{ width: '70%', bgcolor: '#F4F4F4', margin:'15px' }}
        id="outlined-search"
        type='search'
        label="Search" 
        variant="filled" 
        margin="normal"
        onChange={(e) => {setQueryId(e.target.value)}}

        InputProps={{endAdornment:          
          <Button type="submit" onClick={handleNavigate}> OK </Button>
        }}
    />
    </form>

    </Box>
  )
}

export default Scan