import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
    <Box sx={{ width:"100%", marginTop:"60%", marginLeft:"5%"}}>
      
    <form onSubmit={handleSubmit}>
    <TextField 
        sx={{ width: '50%', bgcolor: '#F4F4F4', margin:'15px' }}
        id="outlined-search"
        type='search'
        label="Search" 
        variant="filled" 
        margin="normal"
        onChange={(e) => {setQueryId(e.target.value)}}
        value={queryId}
        InputProps={{endAdornment:          
          <Button type="submit" onClick={handleNavigate}> OK </Button>
        }}
    />
    </form>

    </Box>
  )
}

export default Scan