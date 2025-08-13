/* Import */
import ActivityZ from "/Core/JS/Object/ActivityZ.js";
/*  */

/* Manage Goal elements */
export default class CardZ extends ActivityZ {
    /* Set properties */
    constructor(elementManager) {
        super(elementManager);
        this.id = "cardZ";
    }

    getElement() {
        if (this.active) {
            this.board.style.setProperty("background", this.elementManager.mediumColor);
            this.board.style.setProperty("color", this.elementManager.lightColor);
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("padding-left", "25px");
            this.board.style.setProperty("overflow-wrap", "break-word");
            this.board.style.fontFamily = "OpenDyslexic";
            this.board.style.setProperty("text-align", "left");
            this.board.style.borderRadius = '10px'; // standard
            this.board.style.MozBorderRadius = '10px'; // Mozilla
            this.board.style.WebkitBorderRadius = '10px'; // WebKit
            this.board.style.borderWidth = "3px";
            this.board.style.borderStyle = "solid";
            this.board.style.borderColor = this.elementManager.darkColor;

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
            this.board.style.setProperty("background-color", this.elementManager.mediumColor);
            this.board.style.setProperty("color", this.elementManager.lightColor);
            this.board.style.setProperty("font-size", "0.8em");
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
            this.board.style.borderColor = this.elementManager.darkColor;

            this.title.style.setProperty("margin-top", "20px");
            this.title.innerHTML = "CardZ";
            this.board.appendChild(this.title);

            this.setViewCollapsed(0, 0);
        }

        this.board.appendChild(this.card);
        return this.board;
    }
}
/*  */
