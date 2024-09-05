export async function ajax(props) {
    let {url,method,data,cbSuccess} = props;

    await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: method === "GET" ? null: JSON.stringify(data)
          })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch((err) => {
          console.log(err);
        });

}


