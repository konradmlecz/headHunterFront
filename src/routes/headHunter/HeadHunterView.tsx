import TopBelt from '../../components/topBelt/TopBelt';
import {Box, Typography ,TextField ,Button} from '@mui/material';


function HeadHunterView() {
    return (
      <Box sx={{
        display:'flex',
        justifyContent:'center',
      }}>
       <Box sx={{
         width:'1200px',
         display:'flex',
         flexDirection: 'column',
         paddingTop: '30px'
      }}>
        <Box sx={{
          background:'#292A2B',
          height:'72px',
          display: 'flex',
          alignItems:'center'
        }}>
          <Box sx={{
              width:'180px'
          }}>
             <Typography sx={{
              color:'white'
             }}>Dostępni kursanci</Typography>
          </Box>
          <Box sx={{
              width:'150px'
          }}>
             <Typography sx={{
              color:'white'
             }}>Dostępni kursanci</Typography>
          </Box>
        </Box>
        <Box sx={{
          marginTop:'5px',
          background:'#292A2B',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}>
         <Box sx={{
          marginBottom:'5px',
         
          width: '100%',
          height: '50px',
          display:'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gridTemplateRows: 'auto',
        }}>
           <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
           <TextField
            id="outlined-size-small"
            placeholder='Szukaj'
            sx={{
              border:'none',
              background:'#1E1E1F',
              color:'white',
              outline:'none'
            }}
            size="small"
           />
           </Box>
           <Box/>
         </Box>
           <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
          <Button   sx={{
              background:'#1E1E1F',
            }}variant="contained">Filtrowanie</Button>
           </Box>
         <Box>
         </Box>
        </Box>
      </Box>
      </Box>
 
    );
  }
  
  export default HeadHunterView;
  