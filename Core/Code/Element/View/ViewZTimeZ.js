/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manages Time elements */
export default class ViewzTimeZ extends ViewZ {
    /* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "timeZ";
    }

    setViewActive(){
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let date = document.createElement('p');
        date.innerHTML = this.elementController.getDate();
        this.card.appendChild(date);

        let time = document.createElement('p');
        time.innerHTML = this.elementController.getTime();
        this.card.appendChild(time);
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

        let time = document.createElement('p');
        time.innerHTML = this.elementController.getTime();

        this.card.appendChild(time);
    }
}
/*  */
