/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manage Goal elements */
export default class ViewZCardZ extends ViewZ {
    /* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "cardZ";
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

        this.title.style.setProperty("margin-top", "20px");
        this.title.innerHTML = "CardZ";
        this.card.appendChild(this.title);
    }
}
/*  */
