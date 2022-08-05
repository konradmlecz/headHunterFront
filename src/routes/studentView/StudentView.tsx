import React, {FC, useEffect} from 'react'
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import {ContextManager} from "../../context/ContextManager";
function UserView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();

  useEffect(()=>{
    if(globalState.user.role !== "student") navigate ("/login",{ replace: true });
  },[])

    return (
      <WrapperLoggedView>
        UserView
     </WrapperLoggedView>
    );
  }

  export default UserView;
