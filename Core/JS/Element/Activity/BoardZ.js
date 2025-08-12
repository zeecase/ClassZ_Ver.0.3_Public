/* Import */
import ActivityZ from "/Core/JS/Object/ActivityZ.js";
/*  */

/* Manage Goal elements */
export default class BoardZ extends ActivityZ {
    /* Set properties */
    constructor(elementManager) {
        super(elementManager);
        this.id = "boardZ";

        this.board = document.createElement("p");
        this.title = document.createElement("p");
    }

    getElement() {
        if (this.active) {
            this.style.setProperty("background", this.elementManager.lightColor);
            this.style.setProperty("margin", "3px");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");

            this.board.innerHTML = ""; //TODO: get board

            this.setViewActive();
        } else {
            this.style.setProperty("background-color", this.elementManager.mediumColor);
            this.style.setProperty("color", this.elementManager.lightColor);
            this.style.setProperty("margin", "3px");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");
            this.style.borderRadius = "10px"; // standard
            this.style.MozBorderRadius = "10px"; // Mozilla
            this.style.WebkitBorderRadius = "10px"; // WebKit
            this.style.borderWidth = "3px";
            this.style.borderStyle = "solid";
            this.style.borderColor = this.elementManager.darkColor;

            let gradient = "linear-gradient(";
            if (this.elementManager.orientation == "landscape") gradient += "-9";
            gradient +=
                "0deg, " + this.elementManager.mediumColor + " 70%, " + this.elementManager.themeColor + " 100%)";
            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("background", gradient);
            this.board.style.setProperty("position", "absolute");
            this.board.style.setProperty("top", "0");
            this.board.style.setProperty("bottom", "0");
            this.board.style.setProperty("width", "100%");
            this.board.style.setProperty("height", "100%");
            this.board.style.setProperty("opacity", "20%");
            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("margin", "0");
            this.board.style.setProperty("margin-bottom", "3px");
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("padding-top", "15px");
            this.board.style.borderRadius = "10px"; // standard
            this.board.style.MozBorderRadius = "10px"; // Mozilla
            this.board.style.WebkitBorderRadius = "10px"; // WebKit

            this.title.innerHTML = "Board";
            this.object.appendChild(this.title);

            this.setViewCollapsed(0, 0);
        }

        this.object.appendChild(this.board);
        return this.object;
    }
}
/*  */
