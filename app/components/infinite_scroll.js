import api from "../helpers/wp_api.js";
import { PostCard, SerchCard } from "../components/index.js";
import { ajax } from "../helpers/index.js";

export async function InfiniteScroll() {
    const d = document,
        w = window;
    let query = localStorage.getItem("wpSearch"),        
        apiUrl,
        Component;

        w.addEventListener("scroll",async (e)=>{
            let {scrollTop, clientHeight, scrollHeight} = d.documentElement,
                {hash} = w.location;
            if (scrollTop+clientHeight >= scrollHeight) {
                api.page++;
                if (!hash || hash === "#/") {
                    apiUrl = `${api.POSTS}&page=${api.page}`;
                    Component = PostCard;
                } else if(hash.includes("#/search")){
                    apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                    Component = SerchCard;
                }else{
                    return false;
                }
                d.querySelector(".loader").style.display = "block";

                await ajax({
                url:apiUrl,
                cbSuccess: (posts) => {
                    let html = "";            
                    posts.forEach((post) => (html += Component(post)));
                    d.getElementById("main").insertAdjacentHTML("beforeend",html);
                    d.querySelector(".loader").style.display = "none";
                }
               });
            } 

        });
}