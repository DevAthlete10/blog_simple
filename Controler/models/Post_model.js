export default class PostModel {
   id;
   titulo;
   descripcion;

   constructor(post,id) {
        this.id = id;
        this.titulo = post.titulo;
        this.descripcion = post.descripcion;

   }

}