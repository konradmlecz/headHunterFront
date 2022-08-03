export async function login(data:{pwd:string,email:string}) {

    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        
    });
    console.log(response);
    const dataPrimary = await response.text();
    try {
        return  JSON.parse(dataPrimary);
    } catch (e) {
        return { success: false, errorCode: 500, data: null, message: e } as any;
    }
}
