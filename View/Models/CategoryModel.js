export default class CategoryModel {
   titulo;
   id;
   constructor(props = {titulo:"",id:""}) {
      this.titulo = props.titulo;
      this.id = props.id;
   }

   copy(){
      return new CategoryModel({
         titulo:this.titulo,
         id:this.id,
      });
   }

}