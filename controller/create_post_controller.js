import CrudImpl from "../models/crudImpl.js";
import StateApp from "./estado.js";

export default class CreatePostController {
   #state;
   constructor() {
      this.#state = new StateApp();
   }

   async execute(){
         const newPost = JSON.parse(localStorage.getItem("newPost"));                   
         await new CrudImpl().createData(newPost);   
         const lastState = this.#state.getState();    
         lastState.posts.push(newPost);  
         this.#state.setState({posts: lastState.posts}); 
   }
     
}