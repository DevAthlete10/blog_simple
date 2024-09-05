import {CategoryCardWidgetView, TitleWidgetView} from "../Widgets/indexWidget.js";

export default class CategoryView {
   categories;
   constructor(categories = []) {
      this.categories = categories;
   }

   render(){
      const $category = document.createElement("section");
      $category.classList.add("Category");

      const $titulo = new TitleWidgetView("Categorias");
      $category.appendChild($titulo.render());

      this.categories.forEach((category)=>{
         let formtCategory =  new CategoryCardWidgetView(category);
            $category.appendChild( formtCategory.render());
      });

      return $category;

   }

}