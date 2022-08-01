import React,{FC, useEffect, useState} from 'react';
import {Box, Typography ,TextField ,Button} from '@mui/material';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import {getStudentAll} from '../../utils/studentAll';
import Available from '../../components/available/Available';
import Talk from '../../components/talk/Talk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {FilterPopUp} from "./FilterPopUp/FilterPopUp";
//available interview

function HeadHunterView() {

  const [tab, setTab] = useState<'Available' | 'Talk'>('Available')
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const handleFilterButton = () => {
      setIsPopUpVisible(true);
  }

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();
  if(globalState.user.role !== 'hr') navigate("/", { replace: true });



useEffect(()=>{
 (async ()=>{
  const data = await getStudentAll()
  if (data.isSuccess){
  dispatchGlobalContext({
    type:'SET_STUDENTS',
    payload:{
      students: data.data
    }
  })
  }
 })()
},[])

    return (
      <WrapperLoggedView>
          {isPopUpVisible ? <FilterPopUp setIsPopUpVisible={setIsPopUpVisible}/> : null}
      <Box sx={{
        display:'flex',
        justifyContent:'center',
      }}>
       <Box sx={{
         width:'1200px',
         display:'flex',
         flexDirection: 'column',
      }}>
        <Box sx={{
          marginTop: '30px',
          background:'#292A2B',
          height:'72px',
          display: 'flex',
          alignItems:'center',
        }}>
          <Box sx={{
              width:'180px',
              height:'100%',
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',
              cursor: 'pointer',
              borderBottom: `${tab === 'Available' ? '2px solid red' : '2px solid transparent'}`
          }} onClick={()=>setTab("Available")}>
             <Typography sx={{
              color:'white'
             }}>Dostępni kursanci</Typography>
          </Box>
          <Box sx={{
                     width:'180px',
                     height:'100%',
                     display:'flex',
                     justifyContent:'center',
                     alignItems: 'center',
                     cursor: 'pointer',
                     borderBottom: `${tab === 'Talk' ? '2px solid red' : '2px solid transparent'}`
          }} onClick={()=>setTab('Talk')}>
             <Typography sx={{
              color:'white'
             }}>Do rozmowy</Typography>
          </Box>
        </Box>
        <Box sx={{
          marginTop:'5px',
          background:'#292A2B',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}>
         <Box sx={{
          marginBottom:'5px',
         
          width: '100%',
          height: '50px',
          display:'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gridTemplateRows: 'auto',
        }}>
           <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
           <TextField
            id="outlined-size-small"
            placeholder='Szukaj'
            sx={{
              border:'none',
              background:'#1E1E1F',
              color:'white',
              outline:'none'
            }}
            size="small"
           />
           </Box>
           <Box/>
         </Box>
           <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
          <Button   sx={{
              background:'#1E1E1F',
              cursor:'pointer'
              
            }}   onClick={handleFilterButton} variant="contained"> <FontAwesomeIcon icon={faFilter} />  <Typography sx={{
              paddingLeft:'5px'
            }}>Filtrowanie</Typography></Button>
           </Box>
        </Box>
        {tab ==='Available' && <Available/> }
        {tab ==='Talk' && <Talk/> }
     
      </Box>
      </Box>
      </WrapperLoggedView>
    );
  }
  
  export default HeadHunterView;
  