export default class TitleWidgetView {
   #title;
   constructor(title="Definir Titulo") {
      this.#title = title;
   }

   render(){
      const $title = document.createElement("h2");
      $title.classList.add("Titulo");
      $title.innerHTML = `
         ${this.#title}
      `;
      return $title;
   }

}