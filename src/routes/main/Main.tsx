import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Navigate} from "react-router-dom";
import {Global} from '../../context/store';
import {auth} from '../../utils/auth';

type Roles = 'student' | 'admin' | 'hr' | ''


function Main() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLogged, setIsLogged] = React.useState(false);
    const [role, setRole] = React.useState<Roles>("");

    const { dispatchGlobalContext, globalState } = React.useContext(Global);

    React.useEffect(() => {
       (async ()=>{
         const response = await auth()
         console.log(response);
         if(response.isSuccess){
          dispatchGlobalContext({
            type:'SET_USER',
            payload:{
                user:{
                    role: response.role,
                    firstName: response.firstName,
                    lastName: response.lastName
                }
            }
            
        })
          setIsLogged(true)
          setRole(response.role)
         }
         else {
          setIsLogged(false)
         }
         setIsLoading(false)
       })()
    });

    if(isLoading){
      return (
        <Box sx={{ display: 'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center' }}>
            <CircularProgress />
        </Box>
      );
    }
    if(isLogged && role === "admin"){
      return (
        <>
        {
           <Navigate to="/admin" /> 
         }
     </>
      );
    }
    if(isLogged && role === "hr"){
      return (
        <>
        {
            <Navigate to="/hr" /> 
         }
     </>
      );
    }
    return (
      <>
         {
            isLogged ? <Navigate to="/student" /> : <Navigate to="/login" />
          }
      </>
    );
  }
  
  export default Main;
  