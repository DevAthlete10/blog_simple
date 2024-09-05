 export  default class CategoryCardWidgetView {
    titulo;
    id;
   constructor(props = {titulo: "",id:""}) {        
        this.titulo = props.titulo;
        this.id = props.id;
   }

    render(){
    const $categoryCard = document.createElement("article");
    $categoryCard.classList.add("CategoryCard");
    $categoryCard.innerHTML = `
        <img>
        <div>
        <h2> ${this.titulo} </h2>
        </div>
    `;
    return $categoryCard;
   }
}