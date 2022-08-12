import React, {useEffect} from 'react';
import {Global} from '../../context/store';
import {useNavigate, useLocation} from "react-router-dom";
import ListAvailable from '../../components/listAvailable/ListAvailable';
import {ContextManager} from '../../context/ContextManager'
import HeadHunterMain from '../../components/headHunterMain/HeadHunterMain';
import {AuthRouter} from '../../utils/AuthRouter'

//available interview

function HeadHunterAvailableView() {

    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(globalState);
    useEffect(() => {
        new AuthRouter({navigate: navigate, location: location, state: globalState}).check();
        (async () => {

            await new ContextManager({dispatch: dispatchGlobalContext, state: globalState}).ubdateStudents()
        })()
    }, [])

    return (
        <HeadHunterMain>
            <ListAvailable/>
        </HeadHunterMain>
    );
}

export default HeadHunterAvailableView;
