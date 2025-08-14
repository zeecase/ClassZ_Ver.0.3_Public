/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manages Time elements */
export default class ViewzTimeZ extends ViewZ {
    /* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "timeZ";

        this.date = document.createElement("p");
        this.time = document.createElement("p");
        this.dateText = "";
        this.timeText = "";
    }

    getElement() {
        if (this.active) {
            this.setViewActive();

            this.board.style.setProperty("overflow-wrap", "break-word");
            this.board.style.fontFamily = "OpenDyslexic";
            this.board.style.textAlign = "center";

            this.date.style.setProperty("font-size", "1.2em");
            this.time.style.setProperty("font-size", "1.2em");

            this.date.innerHTML = this.elementController.getDate();
            this.time.innerHTML = this.elementController.getTime();
            this.card.appendChild(this.date);
            this.card.appendChild(this.time);
        } else {
            this.board.style.setProperty("background-color", this.elementController.mediumColor);
            this.board.style.setProperty("color", this.elementController.lightColor);
            this.board.style.setProperty("margin", "3px");
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("overflow-wrap", "break-word");
            this.board.style.fontFamily = "OpenDyslexic";
            this.board.style.setProperty("text-align", "center");
            this.board.style.borderRadius = "10px"; // standard
            this.board.style.MozBorderRadius = "10px"; // Mozilla
            this.board.style.WebkitBorderRadius = "10px"; // WebKit
            this.board.style.borderWidth = "3px";
            this.board.style.borderStyle = "solid";
            this.board.style.borderColor = this.elementController.darkColor;

            this.time.style.setProperty("position", "absolute");
            this.time.style.setProperty("top", "0");
            this.time.style.setProperty("bottom", "0");
            this.time.style.setProperty("width", "100%");
            this.time.style.setProperty("height", "100%");
            this.time.style.setProperty("opacity", "50%");
            this.time.style.setProperty("font-size", "1em");
            this.time.style.setProperty("margin", "0");
            this.time.style.setProperty("margin-bottom", "3px");
            this.time.style.setProperty("padding", "0");
            this.time.style.borderRadius = "10px"; // standard
            this.time.style.MozBorderRadius = "10px"; // Mozilla
            this.time.style.WebkitBorderRadius = "10px"; // WebKit

            this.setViewCollapsed(0, 0);

            this.time.innerHTML = this.elementController.getTime();
            this.board.appendChild(this.time);
        }

        return this.board;
    }
}
/*  */
