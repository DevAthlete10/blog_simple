export default class StateApp {
    #state = {
        titulo:"Mi blog personal",
        posts:[]
    }
    instance;
    constructor() {
        if (StateApp.instance) {
            return StateApp.instance;
        }
        StateApp.instance = this;
    }
    
    setState = obj => {
        for (const key in obj) {
            if (this.#state.hasOwnProperty(key)) {
                this.#state[key] = obj[key];                
            }
        }
    }
    
    getState = () => JSON.parse(JSON.stringify(this.#state));

}