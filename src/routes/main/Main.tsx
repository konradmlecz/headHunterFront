import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Navigate} from "react-router-dom";

type Roles = 'USER' | 'ADMIN' | 'HEADHUNTER'


function Main() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLogged, setIsLogged] = React.useState(false);
    const [role, setRole] = React.useState<Roles>("HEADHUNTER");

    React.useEffect(() => {
      setTimeout(() => {
       const getData = ()=>{
          const isLogged = true
          return isLogged
        }
          getData()
       setIsLoading(false)
       setIsLogged(getData())
      }, 1000)
    });

    if(isLoading){
      return (
        <Box sx={{ display: 'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center' }}>
            <CircularProgress />
        </Box>
      );
    }
    if(isLogged && role === "ADMIN"){
      return (
        <>
        {
           <Navigate to="/admin" /> 
         }
     </>
      );
    }
    if(isLogged && role === "HEADHUNTER"){
      return (
        <>
        {
            <Navigate to="/headhunter" /> 
         }
     </>
      );
    }
    return (
      <>
         {
            isLogged ? <Navigate to="/user" /> : <Navigate to="/login" />
          }
      </>
    );
  }
  
  export default Main;
  