import React,{FC, useEffect, useState} from 'react';
import {Global} from '../../context/store';
import { useNavigate ,useLocation } from "react-router-dom";
import {AuthRouter} from '../../utils/AuthRouter'
import ListTalk from '../../components/listTalk/ListTalk';
import { ContextManager } from '../../context/ContextManager'
import HeadHunterMain from '../../components/headHunterMain/HeadHunterMain';
//available interview

function HeadHunterAvailableView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();
  const location = useLocation();

useEffect(()=>{
  new AuthRouter({navigate:navigate, location:location, state:globalState}).check();
 (async ()=>{
    await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).ubdateStudents()
 })()
},[])

    return (
      <HeadHunterMain>
       <ListTalk/>
       </HeadHunterMain>
    );
  }

  export default HeadHunterAvailableView;
