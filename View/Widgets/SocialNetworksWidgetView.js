export default class SocialNetworksWidgetView {
    #redesSociales;

   constructor() {
    this.#redesSociales = {
        facebook:"https://facebook.com",
        x:"https://x.com",
        instagram:"https://instagram.com",
        youtube:"https://youtube.com"};
   }

   render(){
    const $socialNetworks = document.createElement("footer");

    $socialNetworks.innerHTML = `
        <h2> Redes sociales </h2>
        <nav>
        <a href="${this.#redesSociales.facebook}">Facebook</a>
        <a href="${this.#redesSociales.x}">X</a>
        <a href="${this.#redesSociales.instagram}">Instagram</a>
        <a href="${this.#redesSociales.youtube}">Youtube</a>
        </nav>
    `;
    
    return $socialNetworks;
   }

}