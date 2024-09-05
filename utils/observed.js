export default class Observed {
    #observers = [];
   constructor() {
   }

   addObserver(observer){
    this.#observers.push(observer);
   }

   removeObserver(){
    // this.#observers.
   }

   notify(event){
        this.#observers.forEach(observer => {
            observer.update(event,this);
        });
   }
}