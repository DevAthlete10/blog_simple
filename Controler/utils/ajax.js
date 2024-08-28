export async function ajax(props) {
    let {url,method,data,sdSuccess} = props;

    await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: method === "Get" ? null: JSON.stringify(data) // Convertir el objeto a JSON
          })
        .then( res => res.ok ? res.json() : Promise.reject(res))
        .then(sdSuccess(res));

}