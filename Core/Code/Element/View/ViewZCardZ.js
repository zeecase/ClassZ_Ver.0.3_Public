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

    getElement(active) {
        if (active == this.id) {
            this.view.style.setProperty("background", this.elementController.mediumColor);
            this.view.style.setProperty("color", this.elementController.lightColor);
            this.view.style.setProperty("padding", "0");
            this.view.style.setProperty("padding-left", "25px");
            this.view.style.setProperty("overflow-wrap", "break-word");
            this.view.style.fontFamily = "OpenDyslexic";
            this.view.style.setProperty("text-align", "left");
            this.view.style.borderRadius = '10px'; // standard
            this.view.style.MozBorderRadius = '10px'; // Mozilla
            this.view.style.WebkitBorderRadius = '10px'; // WebKit
            this.view.style.borderWidth = "3px";
            this.view.style.borderStyle = "solid";
            this.view.style.borderColor = this.elementController.darkColor;

            this.card.style.setProperty("font-size", "1em");
            this.card.style.setProperty("position", "absolute");
            this.card.style.setProperty("top", "0");
            this.card.style.setProperty("bottom", "0");
            this.card.style.setProperty("width", "100%");
            this.card.style.setProperty("height", "100%");
            this.card.style.setProperty("opacity", "20%");
            this.card.style.setProperty("margin", "0");
            this.card.style.setProperty("margin-bottom", "3px");
            this.card.style.setProperty("padding", "0");
            this.card.style.setProperty("padding-top", "15px");
            this.card.style.borderRadius = "10px"; // standard
            this.card.style.MozBorderRadius = "10px"; // Mozilla
            this.card.style.WebkitBorderRadius = "10px"; // WebKit
            this.card.innerHTML = ""; //TODO: get card

            this.setViewActive();
        } else {
            this.view.style.setProperty("background-color", this.elementController.mediumColor);
            this.view.style.setProperty("color", this.elementController.lightColor);
            this.view.style.setProperty("font-size", "0.8em");
            this.view.style.setProperty("margin", "3px");
            this.view.style.setProperty("padding", "0");
            this.view.style.setProperty("overflow-wrap", "break-word");
            this.view.style.fontFamily = "OpenDyslexic";
            this.view.style.setProperty("text-align", "center");
            this.view.style.borderRadius = "10px"; // standard
            this.view.style.MozBorderRadius = "10px"; // Mozilla
            this.view.style.WebkitBorderRadius = "10px"; // WebKit
            this.view.style.borderWidth = "3px";
            this.view.style.borderStyle = "solid";
            this.view.style.borderColor = this.elementController.darkColor;

            this.title.style.setProperty("margin-top", "20px");
            this.title.innerHTML = "CardZ";
            this.view.appendChild(this.title);

            this.setViewCollapsed(0, 0);
        }

        this.view.appendChild(this.card);
        return this.view;
    }
}
/*  */
