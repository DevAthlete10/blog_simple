import {ajax} from '../helpers/index.js';
import {Post, PostCard, SearchForm, SerchCard} from '../components/index.js';
import api from '../helpers/wp_api.js';

export async function Router() {
    const d = document,
    w = window,
    $main = d.getElementById("main");
    $main.innerHTML = null;

    let {hash} = location;

    console.log(hash);
    if (!hash || hash === "#/") {
        await ajax({
            url:api.POSTS,
            cbSuccess: (posts) => {
                let html = "";
                posts.forEach(post => html+= PostCard(post));             
                $main.innerHTML = html;
            }   
        });   
    } else if(hash.includes("#/search")) {
        $main.innerHTML = "<h2>Sección del Buscador</h2>";
        let query = localStorage.getItem("wpSearch");
        if (!query){
            d.querySelector(".loader").style.display = "none";
            return false;
        };

        await ajax({
            url:`${api.SEARCH}${query}`,
            cbSuccess: (search) => { 
                let html = "";
                if (search.length === 0) {
                    html = `
                        <p class="error">
                            No existe la búsqueda
                            <mark> ${query}</mark>
                        </p>
                    `;
                } else{
                    search.forEach(element => html += SerchCard(element));
                }    
                $main.innerHTML = html;
            }   
        });   

    } else if(hash === "#/contacto") {
        $main.innerHTML = "<h2>Sección del Contacto</h2>";

    } else {        
        await ajax({
            url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {     
                $main.innerHTML = Post(post);
            }   
        });   
    }

    d.querySelector(".loader").style.display = "none";
}