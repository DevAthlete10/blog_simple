export default class Observer {
   constructor() {
     if (new.target === Observer) {
       throw new Error('La clase abstracta Observer no se puede instanciar');
     }

   }

   update(event) {
      throw new Error('El método update no se puede llamar');
   }

}