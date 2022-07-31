import React,{FC, useEffect} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import {Global} from '../../context/store';
function Talk() {

    const { dispatchGlobalContext, globalState } = React.useContext(Global);
      return (
          <Box sx={{
            background:'#292A2B'
          }}>
            talk
          </Box>
      );
    }

    export default Talk
    