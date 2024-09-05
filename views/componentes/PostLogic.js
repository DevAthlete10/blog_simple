import Observed from "../../utils/observed.js";

export default class PostLogic extends Observed {
   constructor() {
    super();
   }

   execute(){
        document.addEventListener("click",(e)=>{
            console.log("PostLogic");
        })
   }

}