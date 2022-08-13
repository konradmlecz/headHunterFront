import React, { } from 'react';
import { Box, Typography } from '@mui/material';
import { Global } from '../../context/store';
import { ContextManager } from '../../context/ContextManager';
function PaginationBarAvailable() {
    const { dispatchGlobalContext, globalState } = React.useContext(Global);

    const handleNextPage = async () => {
        await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).handleNextPage()
    }
    const handlePrevPage = async () => {
       await new ContextManager({dispatch:dispatchGlobalContext, state:globalState}).handlePrevPage()
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
