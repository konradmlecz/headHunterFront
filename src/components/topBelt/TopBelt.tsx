import React from 'react';
import {Box, CardMedia, Typography }from '@mui/material';
import { Popover } from '@mui/material';
function TopBelt() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (_e: any) => {
    setAnchorEl(_e.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};
const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{
      background:'#1E1E1F',
      display:'flex',
      width: '100vw',
      height: '80px',
      justifyContent:'center',
    }}>
    <Box
      sx={{
        display: 'grid',
        width: '1200px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gridTemplateColumns: 'auto 1fr auto',
      }}
    >
       <CardMedia
        component="img"
        height="50"
        image="./megaK_logo.png"
        alt="Paella dish"
      />
      <Box/>
      <Box aria-describedby={id} onClick={handleClick} sx={{
        cursor:'pointer'
      }}>
        Mateusz Kowalski
      </Box>
      <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}>
                            <Box onClick={handleClose}
                            sx={{
                              width:'150px',
                              background:'#1E1E1F',
                              cursor:'pointer',
                              paddingLeft:'5px'
                            }}>
                                <Typography sx={{
                                  padding:'10px 5px',
                                  fontSize:'12px',
                                  textAlign:'left' 
                                }}>
                                  Konto
                                </Typography>
                                <Typography sx={{
                                  padding:'10px  5px',
                                  fontSize:'12px',
                                  textAlign:'left' 
                                }}>
                                  Wyloguj
                                </Typography>
                            </Box>
                        </Popover>
    </Box>
    </Box>
  );
}

export default TopBelt;
