import { ubdateStatus } from "./ubdateStatus"
export const handlerStatus = async (id:string) => {
  const data =  await ubdateStatus({id:id})
  if(data.isSuccess){
    
  }
  console.log(data,'data is');
}