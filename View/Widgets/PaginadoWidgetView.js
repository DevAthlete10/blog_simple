export default class PaginadoWidgetView {
   constructor() {
   }

   render(){
      const $paginado = document.createElement("article");
      $paginado.classList.add("Paginado");
      $paginado.innerHTML = `      
         <i class="fa-solid fa-angle-left"></i>
         <div class="ButtonPaginado"> 1 </div>   
         <div class="ButtonPaginado SelectPage"> 2 </div>   
         <div class="ButtonPaginado"> 3 </div>   
         <i class="fa-solid fa-angle-right"></i>                        
      `;
      return $paginado;
   }

}