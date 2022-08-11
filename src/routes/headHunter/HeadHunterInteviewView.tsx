import React, {useEffect} from 'react';
import {Global} from '../../context/store';
import {useNavigate, useLocation} from "react-router-dom";
import {AuthRouter} from '../../utils/AuthRouter'
import ListTalk from '../../components/listTalk/ListTalk';
import {ContextManager} from '../../context/ContextManager'
import HeadHunterMain from '../../components/headHunterMain/HeadHunterMain';

//available interview

export const HeadHunterInterviewView = () => {

    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        (async () => {
            await new AuthRouter({navigate: navigate, location: location, state: globalState}).check();
            await new ContextManager({dispatch: dispatchGlobalContext, state: globalState}).ubdateStudents()
        })()
    }, [])

    return (
        <HeadHunterMain>
            {<ListTalk/>}
        </HeadHunterMain>

    );
}

