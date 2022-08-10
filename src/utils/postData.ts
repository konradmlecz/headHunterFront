import { adress } from '../constant/setting';

type Props = {
    link: string;
    data: any;
};
export async function postData({ link, data }: Props) {
    const response = await fetch(`${adress}${link}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        body: JSON.stringify(data),
    });
    const dataPrimary = await response.text();
    try {
        return JSON.parse(dataPrimary);
    } catch (e) {
        return {
            success: false,
            errorCode: 500,
            data: null,
            message: e,
        } as any;
    }
}
