export default function CreatePost() {
    document.addEventListener("click",(e)=>{
        if (!e.target.matches("input")) return false;
        console.log("hola");
    });
}