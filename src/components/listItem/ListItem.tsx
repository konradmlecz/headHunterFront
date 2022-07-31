import React,{FC, useEffect, useState} from 'react';
import {Box, Typography, Button} from '@mui/material';
import MiniBox from '../miniBox/MiniBox';
import {qualitiesStudent, qualitiesText} from '../../constant/qualities'
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
                {itemStudent.firstName + ' ' + itemStudent.lastName}
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
                    {qualitiesStudent.map(item=>
                            <MiniBox
                            textTop={qualitiesText[item]} textDown={itemStudent[item]} quality={item}
                            /> )}
                    </Box>
            }
        </Box>
     </>
    );
  }
  
  export default ListItem;
  