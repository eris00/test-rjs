import React from 'react'
import { Typography, Box }  from '@mui/material/';
import { useNavigate } from 'react-router-dom';

function Product({products}) {

  let navigate = useNavigate();


  return (
    <>
    <Box>
      <h2>Detalji o proizvodu: </h2>

      <Typography>Naslov: {products.title}</Typography>
      <Typography>Autor: {products.author}</Typography>
      <Typography>Izdanje: {products.izdanje}</Typography>
      <Typography>Broj stranica: {products.brStranica}</Typography>
    </Box>
    </>
  )
}

export default Product