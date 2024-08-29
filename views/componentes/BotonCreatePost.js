import Observed from "../../utils/observed.js"
import CreateEvent from "../../events/create_event.js"

export default class BotonCreatePost extends Observed{
    constructor() {        
        super();
        this.handleClick = this.handleClick.bind(this);
        this.init();
    }

    init() {
        document.addEventListener("click", this.handleClick);
    }

    handleClick(e) {
        if (!e.target.matches(".CreatePost")) return false;
        localStorage.setItem("newPost", JSON.stringify({
            titulo:"Prueba",
            descripcion:"Pro"
        }));
        this.notify(new CreateEvent());        
        // Aquí puedes agregar la funcionalidad adicional para el botón
    }

    render() {
        return `
            <button type="button" class="CreatePost">Crear post nuevo</button>
        `;
    }
}
