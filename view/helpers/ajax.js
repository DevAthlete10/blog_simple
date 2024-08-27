export async function ajax(url) {
    try {
        const resp = await fetch(url);
        return resp;
    } catch (error) {
        console.log(error);
    }
}