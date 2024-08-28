export default class Crud {
   constructor() {
     if (new.target === Crud) {
       throw new Error('La clase abstracta Crud no se puede instanciar');
     }
   }

   getData(id) {
       throw new Error('El método getData no se puede llamar');
   }

   createData(data) {
       throw new Error('El método createData no se puede llamar');
   }

   updateData(data) {
       throw new Error('El método updateData no se puede llamar');
   }

   deleteData(id) {
       throw new Error('El método deleteData no se puede llamar');
   }

}


