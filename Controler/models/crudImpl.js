import { ajax } from "../utils/ajax.js";
import Crud from "./crud.js";
import data from "./datos.json";


export default class CrudImpl extends Crud {

   constructor() {
   super();
   }
   
   getData(){
        ajax({
            url: "datos.json",
            method: "Get",
            data: {},
            sdSuccess: (resp) =>{
                console.log(resp);
            }
        })
   }


}

