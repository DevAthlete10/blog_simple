import Observed from "../Utils/Observed.js";
import CategoryModel from "./Models/CategoryModel.js";
import { ArchiveView, CategoryView, MainView, MenuBarView, PostView, SearchView } from "./Pages/indexPage.js";
import {LogoWidgetView, SocialNetworksWidgetView } from "./Widgets/indexWidget.js";

export default class Render extends Observed {
   #footer;
   #$main;
   constructor() {
      super();
   }

   execute(){
      const $root = document.getElementById("root");
      let logo = new LogoWidgetView();
      let main = new MainView();
      let menuBar = new MenuBarView();
      $root.appendChild(logo.render());
      $root.appendChild(main.render());      
      $root.appendChild(menuBar.render());
      this.#footer = new SocialNetworksWidgetView();      
      this.#$main = document.querySelector(".Main");
      this.#loadPageHome(); 
      this.#$main.appendChild(this.#footer.render());
      this.router();
   }

   router(){
      document.addEventListener("click",(e)=>{            
            
         if (e.target.matches(".fa-folder")) {
            this.#loadPageArchive();                          
         }
         if (e.target.matches(".fa-html5")) {
            this.#loadPageHome();              
         }
         if (e.target.matches(".fa-magnifying-glass")) {
            this.#loadPageSearch();             
         }
         if (e.target.matches(".Close")) {
            this.#loadPageHome();               
         }           
         this.#$main.appendChild(this.#footer.render());
            console.log("footer");

      });
   }

   #loadPageSearch(){
      let search = new SearchView();
      this.#$main.innerHTML = "";
      this.#$main.appendChild(search.render());
   }

   #loadPageHome(){
      let categories = [];
      for (let index = 0; index < 4; index++) {
         let category = new CategoryModel({
            titulo:`Categoria ${index+1}`,
            id: index
         });
         categories.push(category);         
      }
      let home = new CategoryView(categories);
      this.#$main.innerHTML = "";
      this.#$main.appendChild(home.render());
   }

   #loadPageArchive(){
      let archive = new ArchiveView();
      this.#$main.innerHTML = "";
      this.#$main.appendChild(archive.render());
   }
}