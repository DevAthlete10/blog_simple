export default class ErrorView {
   constructor() {
   }

   render(){
      const $error = document.createElement("section");
      $error.classList.add("Error");
      $error.innerHTML =  `
         <h1> Error 404 </h1>
         <h2> No existe la página</h2>         
      `;
      return $error;
   }

}