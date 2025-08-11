/* Import */
import ActivityZ from '/Core/JS/Object/ActivityZ.js';
/*  */

/* Manage Goal elements */
export default class BoardZ extends ActivityZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager);
        this.id = "boardZ";

        this.board = document.createElement('p');
    }

    getElement(active){

        if(active){
            this.style.setProperty("background", this.elementManager.lightColor);
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");

            this.board.innerHTML = ""; //TODO: get board

            this.setViewActive();
        } else {
            this.style.setProperty("background-image", "url("+ this.elementManager.getBackgroundTexture("small") + ")");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");

            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("margin-top", "5%");
            this.board.style.setProperty("padding", "0");

            this.board.innerHTML = "Board";

            this.setViewCollapsed(0,0);
        }

        this.object.appendChild(this.board);
        return this.object;
    }
}
/*  */
