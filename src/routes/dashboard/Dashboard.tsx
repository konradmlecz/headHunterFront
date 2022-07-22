import UserView from '../userView/UserView';
import AdminView from '../adminView/AdminView';
import HeadHunterView from '../headHunter/HeadHunterView';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
function DashboardView() {

            return (
              <WrapperLoggedView>
                <HeadHunterView/>
             </WrapperLoggedView>
              );
  }
  
  export default DashboardView;
  