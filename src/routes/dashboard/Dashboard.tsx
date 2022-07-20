import UserView from '../userView/UserView';
import AdminView from '../adminView/AdminView';
import HeadHunterView from '../headHunter/HeadHunterView';
import Box from '@mui/material/Box';
function DashboardView() {

            return (
              <Box sx={{ display: 'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center', color:'white' }}>
                <UserView/>
             </Box>
              );
  }
  
  export default DashboardView;
  