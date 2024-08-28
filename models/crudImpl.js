import { ajax } from "../utils/ajax.js";
import Crud from "./crud.js"
import PostModel from "./Post_model.js";

export default class CrudImpl extends Crud {

   url_BASE = "https://note-app-f0b07-default-rtdb.firebaseio.com/publicaciones" ;

   constructor() {
   super();
   }
   
   async getData(){
        let datos = [];
        await ajax({
            url: `${this.url_BASE}.json`,
            method: "GET",
            data: {},
            cbSuccess: (resp) =>{  
                const posts = Object.entries(resp);       
                posts.forEach(post => {
                    const newpost = new PostModel(post[1],post[0]);
                    datos.push(newpost);
                });
                
            }
        })
        return datos;
   }
   async createData(data){
        await ajax({
            url: `${this.url_BASE}.json`,
            method: "POST",
            data: data,
            cbSuccess: (resp) =>{
                console.log(resp);
            }
        })
   }
   async updateData(data){
        await ajax({
            url: `${this.url_BASE}/${data["id"]}.json`,
            method: "PUT",
            data: data,
            cbSuccess: (resp) =>{
                console.log(resp);
            }
        })
   }


}

