import {Header,Main,Loader,Router, InfiniteScroll} from "./components/index.js";

export function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    Router();    
    InfiniteScroll();
}