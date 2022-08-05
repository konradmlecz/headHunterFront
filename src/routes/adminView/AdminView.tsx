import React, {FC, useEffect} from 'react';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import Box from '@mui/material/Box';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
function AdminView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();

  useEffect(()=>{
    if(globalState.user.role !== "admin") navigate ("/login",{ replace: true });
  },[])

    return (
      <WrapperLoggedView>
      AdminView
     </WrapperLoggedView>
    );
  }

  export default AdminView;
