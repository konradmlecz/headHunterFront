import {Box, CardMedia }from '@mui/material';
import { flexbox } from '@mui/system';

function TopBelt() {
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
      <Box>
        Mateusz Kowalski
      </Box>
    </Box>
    </Box>
  );
}

export default TopBelt;
