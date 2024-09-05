import Observer from "../Utils/Observer.js";
import Render from "../View/Render.js";
import CreateEvent from "../Event/CreateEvent.js";
import UpdateEvent from "../Event/UpdateEvent.js";
import DeleteEvent from "../Event/DeleteEvent.js";
import SearchEvent from "../Event/SearchEvent.js";

export default class LogicController extends Observer {
   #render;
   constructor() {
   super();
   this.#render = new Render();
   }

   execute(){
      this.#render.execute();
   }

   update(event){
      if (event instanceof CreateEvent) {
          console.log("CreateEvent");
         } if (event instanceof UpdateEvent) {
         console.log("UpdateEvent");         
      } if(event instanceof DeleteEvent) {
         console.log("DeleteEvent");         
      } if (event instanceof SearchEvent) {
         console.log("SearchEvent");                  
      }
   }

}