import React,{FC, useEffect, useState} from 'react';
import {Box, Typography, Button} from '@mui/material';
import MiniBoxes from '../miniBoxes/MiniBoxes';
import {Student} from '../../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ContextManager } from '../../context/ContextManager';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";

type Props = {
    itemStudent:Student
}

const ListItemAvaiable: FC<Props> = ({itemStudent}) => {
    const [open,setOpen] = useState(false)
    const { dispatchGlobalContext, globalState } = React.useContext(Global);
    const navigate = useNavigate();

  
    const show = ()=> {
        new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).setChoosenStudentId(itemStudent.id)
        navigate("/cv", { replace: true });
    }


    const handleStatusAv = async ()=>{
        await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).setStatusOfStudentToInteview(itemStudent.id)
        
    }

    const handleStatusEm = async ()=>{
        await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).setStatusOfStudentToEmployed(itemStudent.id)
        
    }
    return (
        <>
        <Box sx={{display:'flex', flexDirection:'column', margin: '10px', borderTop: '4px solid #222224', padding: '5px 10px'}}>
          <Box sx={{display:"grid", gridTemplateColumns: 'auto auto 1fr auto auto auto auto', justifyContent:'center', alignItems:'center'}}>
            <Typography>
               
            </Typography>
            
            <Typography>
                {itemStudent.firstName + ' ' + itemStudent.lastName}
            </Typography>
            <Box/>
            <Button sx={{
                background:'#E02735',
                color: 'white',
                margin: '5px 10px'
            }} onClick={show}>Pokaż Cv</Button>
               <Button sx={{
                background:'#E02735',
                color: 'white',
                margin: '5px 10px'
            }} onClick={handleStatusAv}>Brak zainteresowania</Button>
               <Button sx={{
                background:'#E02735',
                color: 'white',
                margin: '5px 10px'
            }} onClick={handleStatusEm}>Zatrudniony</Button>
             <Box onClick={()=>setOpen(!open)} sx={{
                              cursor:'pointer'
             }}>
                {
                    open ?   <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> 
                }
             </Box>
            </Box>
            <MiniBoxes open={open} itemStudent={itemStudent}/>
        </Box>
     </>
    );
  }
  
  export default ListItemAvaiable;
  