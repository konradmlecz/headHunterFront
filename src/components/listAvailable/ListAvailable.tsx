import React,{FC, useEffect} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import {Global} from '../../context/store';
import ListAvailableItem from '../listAvaiableItem/ListAvailableItem';
function ListAvailable() {

    const { dispatchGlobalContext, globalState } = React.useContext(Global);

      return (
          <Box sx={{
            background:'#292A2B'
          }}>
            {globalState.studentsAvailable.map(item=> <ListAvailableItem key={item.email} itemStudent={item}/>)}
          </Box>
      );
    }

    export default ListAvailable
    