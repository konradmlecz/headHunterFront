import React,{FC, useEffect, useState} from 'react';
import {Box, Typography, Button} from '@mui/material';
import MiniBox from '../miniBox/MiniBox';
import {qualitiesStudent, qualitiesText} from '../../constant/qualities';
import {Student} from '../../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ubdateStatus } from '../../utils/ubdateStatus'
import {getStudentAll} from '../../utils/studentAll';
import {Global} from '../../context/store';

type Props = {
    itemStudent:Student
}

const ListItem: FC<Props> = ({itemStudent}) => {
    const [open,setOpen] = useState(false)
    const { dispatchGlobalContext, globalState } = React.useContext(Global);

    const handleStatus = async ()=>{
        const data = await ubdateStatus({id:itemStudent.id})
        if(data.isSuccess){
            const data2 = await getStudentAll()
            if(data2.isSuccess){
            dispatchGlobalContext({
                type:'SET_STUDENTS',
                payload:{
                  students: data2.data
                }
              })
            }
        }
    }
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
            }} onClick={handleStatus}>Zarezerwuj Rozmowe</Button>
             <Box onClick={()=>setOpen(!open)} sx={{
                              cursor:'pointer'
             }}>
                {
                    open ?   <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> 
                }
             </Box>
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
  