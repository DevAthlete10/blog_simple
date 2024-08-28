import CrudImpl from "../models/crudImpl.js";
import Render from "../views/render.js";
import CreatePostController from "./create_post_controller.js";
import DeletePostController from "./delete_post_controller.js";
import StateApp from "./estado.js";
import UpdatePostController from "./update_post_controller.js";

export default  class Logica {
   constructor() {
    
}


async execute(){
      const updatePostController = new UpdatePostController();
      const createPostController = new CreatePostController();
      const deletePostController = new DeletePostController();
    const crud = new CrudImpl();    
    const renderizado = new Render();
    const publicaciones = await crud.getData();
    const state = new StateApp();

    const lastState = state.getState();
    publicaciones.forEach((post) =>{
        lastState.posts.push(post);        
    });
    
    state.setState({posts: lastState.posts});
    renderizado.execute();
   }


}

