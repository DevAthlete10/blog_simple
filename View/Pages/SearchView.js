export default class SearchView {
   constructor() {
   }

   render(){
      const $search = document.createElement("div");
      $search.classList.add("Search");

      $search.innerHTML = `
        <i class="fa-solid fa-angle-down Close"></i>
         <input placeholder="Buscar publicación">
      `;

      return $search;
   }

}