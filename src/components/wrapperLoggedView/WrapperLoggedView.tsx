import React, {FC} from 'react';
import TopBelt from '../../components/topBelt/TopBelt';
import {Box} from '@mui/material';

type Props = {
 children: React.ReactNode
}

const WrapperLoggedView: FC<Props> =({children}) => {
    return (
      <Box sx={{
         width:'100%',
         minHeight: '100vh',
         display:'grid',
         gridTemplateColumns: 'auto',
         gridTemplateRows: '80px 1fr',
      }}>
        <TopBelt/>    
         {children}
      </Box>
    );
  }
  
  export default WrapperLoggedView;