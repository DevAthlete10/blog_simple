export default class Observed {
    #observers = [];
   constructor() {
   }

   addObserver(observer){
    this.#observers.push(observer);
   }

   notify(event){
        this.#observers.forEach(observer => {
            observer.update(event,this);
        });
   }
}