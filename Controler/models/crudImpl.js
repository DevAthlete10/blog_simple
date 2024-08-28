import { ajax } from "../utils/ajax.js";
import Crud from "./crud.js"

export default class CrudImpl extends Crud {

   constructor() {
   super();
   }
   
   async getData(){
        await ajax({
            url: "./models/datos.json",
            method: "Get",
            data: {},
            sdSuccess: (resp) =>{
                console.log(resp);
            }
        })
   }


}

