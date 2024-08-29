import CreateEvent from "../events/create_event.js";
import UpdateEvent from "../events/update_event.js";
import CrudImpl from "../models/crudImpl.js";
import Observer from "../utils/observer.js";
import Render from "../views/render.js";
import CreatePostController from "./create_post_controller.js";
import DeletePostController from "./delete_post_controller.js";
import UpdatePostController from "./update_post_controller.js";
import StateApp from "./estado.js";
import BotonCreatePost from "../views/componentes/BotonCreatePost.js";

export default  class Logica extends Observer{
   #state;
   #updatePostController;
   #createPostController;
   #deletePostController;
   #render;
   #data;
   #createBoton;
   constructor() {
      super();
      this.#updatePostController = new UpdatePostController();
      this.#createPostController = new CreatePostController();
      this.#deletePostController = new DeletePostController();      
      this.#state = new StateApp();
      this.#render = new Render();
      this.#createBoton = new BotonCreatePost();
      this.#data = new CrudImpl();    

      this.#createBoton.addObserver(this);
      this.#createBoton.addObserver(this.#createPostController);
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
   
   update(event,observed){
      if (event instanceof CreateEvent) {
         console.log("logica");
         console.log(this.#state.getState());
         this.#render.execute();

         } if (event === UpdateEvent) {
            console.log("UpdateEvent");
            
         } else {
         console.log("DeleteEvent");
         
      }
   }

}

