import React,{FC, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';

import { qualitiesStudentText, qualitiesKey, qualitiesStudentBoolean, qualitiesStudentDegree } from '../../constant/qualities';
 
type Props = {
    textTop:string;
    textDown: string | number | boolean;
    quality: qualitiesKey;

}



const MiniBox:FC<Props> = ({textTop, textDown, quality}) =>{
  
    return (
        <>
        <Box sx={{display:'flex', flexDirection:'column', background: '#222324', padding: '10px'}}>
           <Box sx={{padding:'5px'}}>
            <Typography sx={{
                fontSize:'12px'
            }}>{textTop}</Typography>
           </Box>
           <Box sx={{padding:'5px'}}>
         {
          qualitiesStudentText.includes(quality) ? (
                <Typography>{textDown}</Typography>
            ) : null
         }
            {
          qualitiesStudentBoolean.includes(quality) ? (
                <Typography>{textDown ? 'Tak' : 'Nie'}</Typography>
            ) : null
         }
               {
          qualitiesStudentDegree.includes(quality) ? (
                <Typography>{textDown} /5</Typography>
            ) : null
         }
            </Box>
        </Box>
     </>
    );
  }
  
  export default MiniBox;
  