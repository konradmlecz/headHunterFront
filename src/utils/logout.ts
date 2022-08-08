export async function logout() {
    const response = await fetch('http://localhost:3001/auth/logout', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
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
