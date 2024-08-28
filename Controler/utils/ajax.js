export function ajax(props) {
    let {url,method,data,sdSuccess} = props;

    fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convertir el objeto a JSON
          })
        .then( ()=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
        })
        .then(sdSuccess(resp));

}