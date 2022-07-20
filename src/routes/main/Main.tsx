import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Navigate} from "react-router-dom";

function Main() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLogged, setIsLogged] = React.useState(false);
  

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
    return (
      <>
         {
            isLogged ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
      </>
    );
  }
  
  export default Main;
  