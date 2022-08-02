import React,{FC, useEffect} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import {Global} from '../../context/store';
import {getData} from '../../utils/getData';
import ListTalkItem from '../listTalkItem/ListTalkItem';
function ListTalk() {

    const { dispatchGlobalContext, globalState } = React.useContext(Global);
      return (
        <Box sx={{
          background:'#292A2B'
        }}>
          {globalState.studentsInteview.map(item=> <ListTalkItem key={item.email} itemStudent={item}/>)}
        </Box>
      );
    }

    export default ListTalk
    