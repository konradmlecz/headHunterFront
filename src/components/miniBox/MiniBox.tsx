import React,{FC, useEffect, useState} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';

import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import {getStudentAll} from '../../utils/studentAll'
import { grid } from '@mui/system';

type Props = {
    textTop:string;
    textDown: string | number | boolean;
}



const MiniBox:FC<Props> = ({textTop, textDown}) =>{
  

    return (
        <>
        <Box sx={{display:'flex', flexDirection:'column', background: '#222324', padding: '10px'}}>
           <Box sx={{padding:'5px'}}>
            <Typography sx={{
                fontSize:'12px'
            }}>{textTop}</Typography>
           </Box>
           <Box sx={{padding:'5px'}}>
            <Typography>{textDown}</Typography>
           </Box>
        </Box>
     </>
    );
  }
  
  export default MiniBox;
  