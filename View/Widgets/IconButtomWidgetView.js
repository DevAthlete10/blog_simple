export default class IconButtomWidgetView {
   constructor(props) {
    this.icon = props.icon;
   }

   render(){
    const $iconButtom = document.createElement("li");
    $iconButtom.innerHTML = `
        <a href="#"><i class="${this.icon}"></i></a>
    `;
   }

}