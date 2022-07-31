import React,{FC, useEffect} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import ListItem from '../../components/listItem/ListItem';
function Available() {

    const { dispatchGlobalContext, globalState } = React.useContext(Global);
  
      return (
          <Box sx={{
            background:'#292A2B'
          }}>
            {globalState.students.map(item=> <ListItem key={item.email} itemStudent={item}/>)}
          </Box>
      );
    }

    export default Available
    