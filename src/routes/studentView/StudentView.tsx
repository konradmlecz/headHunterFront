import React,{FC} from 'react'
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
function UserView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();
  if(globalState.user.role !== 'student') navigate("/", { replace: true });
    return (
      <WrapperLoggedView>      
        UserView
     </WrapperLoggedView>
    );
  }
  
  export default UserView;
  