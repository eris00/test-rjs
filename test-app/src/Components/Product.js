import React from 'react'
import { Typography, Box }  from '@mui/material/';
import {  Link } from 'react-router-dom';

function Product({products}) {


  return (
    <>
    <Box sx={{backgroundColor:'lightgrey', textAlign:'center', marginTop:'20vh'}}>
      <h1 sx={{}}>Detalji o proizvodu: </h1>

      <Typography sx={{fontSize:'1.7em', textAlign:'center'}}><b>Naslov:</b> {products.title}</Typography>
      <Typography sx={{fontSize:'1.7em', textAlign:'center'}}><b>Autor:</b> {products.author}</Typography>
      <Typography sx={{fontSize:'1.7em', textAlign:'center'}}><b>Izdanje:</b> {products.izdanje}</Typography>
      <Typography sx={{fontSize:'1.7em', textAlign:'center'}}><b>Broj stranica:</b> {products.brStranica}</Typography>
    </Box>
    <Link to='/'><Typography sx={{fontSize:'1.5em', textAlign:'center'}}>Go back to home</Typography></Link>
    </>
  )
}

export default Product