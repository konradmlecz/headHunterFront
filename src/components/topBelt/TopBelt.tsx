import {Box, CardMedia }from '@mui/material';

function TopBelt() {
  return (
    <Box
      sx={{
        display: 'grid',
        width: '1200px',
        height: '100px',
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
  );
}

export default TopBelt;
