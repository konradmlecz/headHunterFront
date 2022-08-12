import React, { FC, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Global } from '../../context/store';
import { getData } from '../../utils/getData';
import { ContextManager } from '../../context/ContextManager';
import { useNavigate, useLocation } from 'react-router-dom';
import ListTalkItem from '../listTalkItem/ListTalkItem';
function PaginationBarAvailable() {
    const { dispatchGlobalContext, globalState } = React.useContext(Global);

    new ContextManager({dispatch:dispatchGlobalContext, state:globalState})
    const location = useLocation();

    const handleNextPage = () => {
        new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).handleNextPage()
    }
    const handlePrevPage = () => {
        console.log("handlePrevPage ");
        new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).handlePrevPage()
    }
    return (
        <Box
            sx={{
            display:'flex',
            justifyContent:'center'
            }}
        >
         <Typography sx={{
            padding: '5px 10px'
         }}>Ilość stron: {globalState.availableTotalPages}</Typography>
           <Typography sx={{
            padding: '5px 10px'
         }}>Aktualna strona: {globalState.availableActualPage}</Typography>
         <Typography sx={{
            padding: '5px 10px',
            cursor: 'pointer'
         }} onClick={handlePrevPage}>Poprzednia strona</Typography>
         <Typography sx={{
            padding: '5px 10px',
            cursor: 'pointer'
         }} onClick={handleNextPage} >Następna strona</Typography>
        </Box>
    );
}

export default PaginationBarAvailable;
