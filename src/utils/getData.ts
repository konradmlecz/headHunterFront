import { adress } from "../constant/setting";

type Props = {
    link:string
    parametr?:string | number
}
export async function getData({link, parametr}:Props) {
    if(parametr){
        const response = await fetch(`${adress}/${link}/${parametr}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'no-cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, *same-origin, omit
        });
        const dataPrimary = await response.text();
        try {
            return JSON.parse(dataPrimary);
        } catch (e) {
            return { success: false, errorCode: 500, data: null, message: e } as any;
        }


    }
    else{
        const response = await fetch(`${adress}/${link}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'no-cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, *same-origin, omit
        });
        const dataPrimary = await response.text();
        try {
            return JSON.parse(dataPrimary);
        } catch (e) {
            return { success: false, errorCode: 500, data: null, message: e } as any;
        }
    }

}
