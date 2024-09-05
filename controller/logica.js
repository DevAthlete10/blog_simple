import CreateEvent from "../events/create_event.js";
import UpdateEvent from "../events/update_event.js";
import CrudImpl from "../models/crudImpl.js";
import Observer from "../utils/observer.js";
import CreatePostController from "./create_post_controller.js";
import DeletePostController from "./delete_post_controller.js";
import UpdatePostController from "./update_post_controller.js";
import StateApp from "./estado.js";
import Render from "../views/render.js";
import PostLogic from "../views/componentes/PostLogic.js";

export default  class Logica extends Observer{
   #state;
   #updatePostController;
   #createPostController;
   #deletePostController;
   #render;
   #data;
   #postLogic;
   constructor() {
      super();
      this.#updatePostController = new UpdatePostController();
      this.#createPostController = new CreatePostController();
      this.#deletePostController = new DeletePostController();      
      this.#state = new StateApp();
      this.#render = new Render();
      this.#data = new CrudImpl();    
      this.#postLogic = new PostLogic();
   }
   

   async execute(){  
    const publicaciones = await this.#data.getData();
    const lastState = this.#state.getState();
    publicaciones.forEach((post) =>{
        lastState.posts.push(post);        
      });
      
      this.#state.setState({posts: lastState.posts});
      this.#render.execute();
   }
   
   async update(event,observed){
      if (event instanceof CreateEvent) {
         await this.#createPostController.execute();
         this.#render.execute();
         console.log("hola");
         } if (event instanceof UpdateEvent) {
            console.log("UpdateEvent");
            
         } else {
         console.log("DeleteEvent");
         
      }
   }

}

