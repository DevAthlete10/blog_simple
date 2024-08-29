import CreateEvent from "../events/create_event.js";
import CrudImpl from "../models/crudImpl.js";
import Observer from "../utils/observer.js";
import Render from "../views/render.js";
import StateApp from "./estado.js";

export default class CreatePostController extends Observer {
   #state;
   #render;
   constructor() {
      super();
      this.#state = new StateApp();
      this.#render = new Render();
   }

   async update(event, observed){
      if (event instanceof CreateEvent) {
         const newPost = JSON.parse(localStorage.getItem("newPost"));                   
         await new CrudImpl().createData(newPost);   
         const lastState = this.#state.getState();         
         console.log(lastState);
         lastState.posts.push(newPost);  
         console.log(lastState);
          this.#state.setState({posts: lastState.posts});      
          this.#render.execute();
      }
      
   }
     
}