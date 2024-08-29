import StateApp from "../controller/estado.js";
import BotonCreatePost from "./componentes/BotonCreatePost.js";
import { Header } from "./componentes/Header.js";
import { Main } from "./componentes/Main.js";
import { PostCard } from "./componentes/PostCard.js";

export default class Render {

    #$root = document.getElementById("root");
    #stateApp = new StateApp();
   constructor() {
    }

    execute(){
    
       this.#$root.innerHTML = null;       
       this.#$root.appendChild(Header(this.#stateApp.getState().titulo));    
       this.#$root.appendChild(Main());   
       this.#loadPosts();
   }

   #loadPosts(){        
        const $main = document.querySelector(".main");
        let html = new BotonCreatePost().render();
        console.log(this.#stateApp.posts);
        this.#stateApp.getState().posts.forEach(post => {
            html += PostCard(post);            
        });

        $main.insertAdjacentHTML("afterbegin",html);

   }
}
