export async function auth() {
    const response = await fetch('http://localhost:3001/auth/check',{
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
