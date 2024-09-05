export default class PostModel {
   titulo;
   contenido;
   fecha;
   autor;
   constructor(props = {titulo:"",contenido:"",fecha:"",autor:""}) {
      this.titulo = props.titulo;
      this.contenido = props.contenido;
      this.fecha = props.fecha;
      this.autor = props.autor;
   }  

   copy(){
      return new PostModel({
         titulo:this.titulo,
         contenido:this.contenido,
         fecha:this.fecha,
         autor:this.autor,
      });
   }

   map(){
      return {
         titulo:`${this.titulo}`,
         contenido:`${this.contenido}`,
         fecha:`${this.fecha}`,
         autor:`${this.autor}`
      };
   }

}