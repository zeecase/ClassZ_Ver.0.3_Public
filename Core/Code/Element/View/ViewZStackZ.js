/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manage Goal elements */
export default class ViewZStackZ extends ViewZ {
    /* Set properties */
    constructor() {
        super("stackZ");
        this.favorite = 2;
    }

    setViewActive(){

        this.card.innerHTML = ""; //TODO: get card
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.mediumColor);
        this.view.style.setProperty("color", this.elementController.lightColor);
        this.view.style.setProperty("font-size", "0.8em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let title = document.createElement('p');
        title.innerHTML = "StackZ";

        this.card.appendChild(title);
    }
}
/*  */
