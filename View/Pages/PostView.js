export default class PostView {
   constructor() {
   }

   render(){
      const $post = document.createElement("article");
      $post.classList.add("Post");
      $post.innerHTML = `
         <div class="Etiquetas">
            <b>Etiqueta 1</b>
            <b>Etiqueta 2</b>
         </div>
         <div class="Encabezado">
         <div>
            <h1>Titulo</h1>
            <h4>Fecha de creación</h4>         
         </div>
            <h4>Categoria</h4>
         </div>
         <div class="ContenidoPost">
            <a>Contenido</a>
         </div>
      `;
      return $post;
   }

}