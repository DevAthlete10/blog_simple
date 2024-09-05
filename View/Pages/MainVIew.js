import {SocialNetworksWidgetView} from "../Widgets/indexWidget.js";

export default class MainView {
   constructor() {
   }

   render(){
      const $main = document.createElement("main");
      $main.classList.add("Main");     
      return $main;
   }

}