import React,{FC, useEffect, useState} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import MiniBox from '../miniBox/MiniBox';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import {getStudentAll} from '../../utils/studentAll'
import {keys,text,key} from '../../constant/keys'
import {Student} from '../../context/store'

type Props = {
    itemStudent:Student
}


const ListItem: FC<Props> = ({itemStudent}) => {
    const [open,setOpen] = useState(false)

    return (
        <>
        <Box sx={{display:'flex', flexDirection:'column', margin: '10px', borderTop: '4px solid #222224', padding: '5px 10px'}}>
          <Box sx={{display:"grid", gridTemplateColumns: 'auto 1fr auto auto', justifyContent:'center', alignItems:'center'}}>
            <Typography>
                Jan K.
            </Typography>
            <Box/>
            <Button sx={{
                background:'#E02735',
                color: 'white',
                margin: '5px 10px'
            }}>Zarezerwuj Rozmowe</Button>
             <Box onClick={()=>setOpen(!open)}>Zwiń</Box>
            </Box>
            {
                open && <Box sx={{display: 'flex'}}>
                    {keys.map(item=>
                            <MiniBox
                            textTop={text[item]} textDown={itemStudent[item]}
                            /> )}
                    </Box>
            }
        </Box>
     </>
    );
  }
  
  export default ListItem;
  