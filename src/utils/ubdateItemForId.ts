import {adress} from "../constant/setting";

export async function ubdateItemForId(data:{id: string, link:string}) {
    const link = `${adress}/${data.link}${data.id}`
    console.log(link, 'link');
    const response = await fetch(link, {
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
       
    });
    const dataPrimary = await response.text();
    try {
        return  JSON.parse(dataPrimary);
    } catch (e) {
        return { success: false, errorCode: 500, data: null, message: e } as any;
    }
}
