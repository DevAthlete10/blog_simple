export default class PostCardWidgetView {
   constructor() {
   }

   render(){
    const $postCard = document.createElement("article");
    $postCard.classList.add("PostCard");
    $postCard.innerHTML = `
        <img>
        <br>
        <div>
        <h2>Titulo</h2>
        <br>
        <p>Fecha de creación</p>
        </div>
    `;
    return $postCard;
   }
}