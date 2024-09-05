export default class MenuBarView {
   constructor(props = {selectItem:0}) {
    this.selectItem = props.selectItem;
   }

   render(){
    let items = [
        "fa-solid fa-magnifying-glass",
        "fa-brands fa-html5",
        "fa-solid fa-folder"
    ];
    const $menuBar = document.createElement("nav");
    $menuBar.classList.add("MenuBar");
    $menuBar.innerHTML = `<ul></ul>`;
    items.forEach(item => {
        // $menuBar
        $menuBar.insertAdjacentHTML("afterbegin",item);
    });

    return $menuBar;

   }
}