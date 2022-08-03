import React,{FC, useEffect, useState} from 'react';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import ListAvailable from '../../components/listAvailable/ListAvailable';
import { ContextManager } from '../../context/ContextManager'
import HeadHunterMain from '../../components/headHunterMain/HeadHunterMain';
//available interview

function HeadHunterAvailableView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();
  if(globalState.user.role !== 'hr') navigate("/", { replace: true });


useEffect(()=>{
 (async ()=>{
    await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).ubdateStudents()
 })()
},[])

    return (
      <HeadHunterMain>
        <ListAvailable/> 
      </HeadHunterMain>
    );
  }
  
  export default HeadHunterAvailableView;
  