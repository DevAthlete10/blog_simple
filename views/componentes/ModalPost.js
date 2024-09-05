import CreateEvent from "../../events/create_event.js";
import Observed from "../../utils/observed.js";

export default class ModalPost extends Observed{    
    type;
    tituloPost;
    descripcionPost;
   constructor(props = {type:"Crear Post",tituloPost:"",descripcionPost:""}) {
    super();
    this.type = props.type;
    this.tituloPost = props.tituloPost;
    this.descripcionPost = props.descripcionPost;
    this.handleClick = this.handleClick.bind(this);
    this.init();

   }

   init(){
        document.addEventListener("click",this.handleClick);
   }

   handleClick(e) {
       const $tituloPost =  document.querySelector("#TituloPost"),
             $descripcionPost =  document.querySelector("#DescripcionPost"),
             $modalPost = document.querySelector(".modalPost");
    if (e.target.matches(".CreatePost")){
                 console.log("Create Post");
                 if ($tituloPost.value ==="" || $descripcionPost.value === "") {
                     if($tituloPost.value ==="") $tituloPost.placeholder = "Falta titulo";
                     if ($descripcionPost.value === "") $descripcionPost.placeholder = "Falta descripcion";                            
                     return false;
                 };
                 localStorage.setItem("newPost", JSON.stringify({
                     titulo:$tituloPost.value,
                     descripcion:$descripcionPost.value
                 }));
                 this.notify(new CreateEvent());    
                 $modalPost.style.visibility = "hidden";
                //  return false;
                };

    if (e.target.matches(".UpdatePost")){

        console.log("Update Post");
            if ($tituloPost.value === "" || $descripcionPost.value === "") {
                if($tituloPost.value ==="") $tituloPost.placeholder = "Agregar nuevo titulo";
                if ($descripcionPost.value === "") $descripcionPost.placeholder = "Falta descripcion";                            
                return false;
            };
           localStorage.setItem("updatePost", JSON.stringify({
                titulo:$tituloPost.value,
                descripcion:$descripcionPost.value
            }));
            $modalPost.style.visibility = "hidden";
            return false;
    };
   
}

   render(){
        return `        
        <div id="openModal" class="modalPost">
            <div>
                <a href="#close" title="Close" class="close">X</a>
                    <h3>${(this.type === "Crear Post")? "Crear post":"Actualizar Post"}</h3>
                    <input type="text" placeholder="${this.tituloPost}" id="TituloPost" class="no-spinner">  
                    <input type="text" placeholder="${this.descripcionPost}" id="DescripcionPost" class="no-spinner">  
                    <button type="submit" id="Calcular">${(this.type === "Crear Post")? "Crear post":"Actualizar Post"}</button>
            </div>
        </div>
        `;
   }
}