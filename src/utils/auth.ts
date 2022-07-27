
const data = {
	email:"",
	pwd: "",
	role: ""
}


export async function auth() {
    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin': 'http://localhost:3001/auth/login',
        },
        body: data ? JSON.stringify(data) : undefined
    });

    const dataPrimary = await response.text();
    console.log(dataPrimary);
    let dataParsed = null;
    try {
        dataParsed = JSON.parse(dataPrimary);
    } catch (e) {
        return { success: false, errorCode: 500, data: null, message: e } as any;
    }
}
