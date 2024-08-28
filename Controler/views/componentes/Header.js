export function Header(titulo) {
    const $header = document.createElement("header");

    $header.innerHTML = `
        <h2>${titulo} </h2>
    `;
    return $header;
}