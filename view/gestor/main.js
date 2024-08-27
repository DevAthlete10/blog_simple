import { ajax } from "../helpers/ajax.js";

const d = document;
let $bodyContent = d.querySelector("#BodyContent");

async function cargarFooter() {    
    const resp = await ajax("./view/widgets/footer.html");
    const $contenido = await resp.text();
    $bodyContent.insertAdjacentHTML("beforeend",$contenido);
}

async function cargarPageError() {
    const resp = await ajax("./view/pages/error/error.html");
    const $contenido = await resp.text();
    $bodyContent.insertAdjacentHTML("afterbegin",$contenido);
}

cargarPageError();
cargarFooter(); 