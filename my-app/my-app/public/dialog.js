"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'; 
import Calendar from './calender';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({value, setValue}) {
  // const [value, setValue] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  const handlesubmit = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    setIsTrue(false);
  };
  const handelClose = () => {
    setIsTrue(false);
  };

  return (
    <div>
      <Box sx={{ ...style, display: isTrue ? "block" : "none" }} onClose={handelClose}>

        <Input value={value} onChange={e => setValue(e.target.value)} fullWidth />
        <br/> <br />
        <Button variant="contained" color="success"  onClick={handlesubmit}>
          Success
        </Button>
        <Button variant="outlined" color="error" onClick={handelClose}>
          Cancel
        </Button>
      </Box>
    </div>

  );
}




