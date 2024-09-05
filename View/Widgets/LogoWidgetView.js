export default class LogoWidgetView {
   constructor() {
   }

   render(){
    const $logo = document.createElement("h1");
    $logo.classList.add("Logo");
    $logo.innerHTML = `
        Blog simple        
    `;
    return $logo;    
   }
}