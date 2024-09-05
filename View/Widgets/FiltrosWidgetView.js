export default class FiltrosWidgetView {
   constructor() {
   }

   render(){
    const $filtro = document.createElement("section");
    $filtro.innerHTML = `
        <details class="CategoriaFiltro">
            <summary>Categoria</summary>
            <span class="tag">Categoria 1</span>
            <span class="tag">Categoria 2</span>
            <span class="tag">Categoria 3</span>
            <span class="tag">Categoria 4</span>
        </details>
        <details class="EtiquetaFiltro">
            <summary>Etiqueta</summary>
            <span class="tag">Etiqueta 1 </span>
            <span class="tag">Etiqueta 2 </span>
            <span class="tag">Etiqueta 3 </span>
            <span class="tag">Etiqueta 4 </span>            
        </details>
    `;
    return $filtro;
   }

}