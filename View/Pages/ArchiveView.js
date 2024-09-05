import {FiltrosWidgetView, PaginadoWidgetView, PostCardWidgetView, TitleWidgetView} from "../Widgets/indexWidget.js";

export default class ArchiveView {
   constructor() {
   }

   render(){
      const $archive = document.createElement("section");
      $archive.classList.add("Archivo");

      const filtros = new FiltrosWidgetView();
      const paginado = new PaginadoWidgetView();
      const titulo = new TitleWidgetView("Publicaciones filtradas");
      $archive.appendChild(filtros.render());    
      $archive.appendChild(titulo.render());  
      for (let index = 0; index < 6; index++) {
         $archive.appendChild(new PostCardWidgetView().render());
      }
      $archive.appendChild(paginado.render());
      return $archive;
   }

}