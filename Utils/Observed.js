export default class Observed {
   #observers;
   constructor() {
      this.#observers = [];
   }

   addObserver(observer){
      this.#observers.push(observer);      
   }

   notify(event){
      if (this.#observers.length > 0 ) {
         this.#observers.forEach(observer => {
            observer.update(event);
         });
      }
   }

}