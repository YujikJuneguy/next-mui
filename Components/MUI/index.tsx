import React, {useState} from 'react'
import { Box,Button,Typography,Slider } from "@mui/material";


const Mui = () => {
  return (
    <Box sx={{ width: 500,
      mx:'auto'
     }}>
      <Button variant='contained'>Click me</Button>
      <Button variant='outlined'>outlined</Button>
      <Button variant='contained'color= 'success'>Success</Button>
      <Button variant='contained'color= 'warning'>warning</Button>
      <Button variant='contained'color= 'error'>error</Button>
      {/* Task 1 */}
      <Typography sx={{padding:5, mx:'auto'}}>
       Adjust Screen Brightness
      </Typography>

      <Slider
      
             />
    </Box>    
  )
}

export default Mui
// ___________________________________________________________________
