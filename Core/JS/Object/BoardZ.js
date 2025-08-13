/* Import */
import ElementManager from '/Core/JS/Manager/ElementManager.js';
/*  */

/* ObjZ element */
export default class BoardZ{

    constructor(elementManager) {

        //Set element manager//
        this.elementManager = elementManager;

        this.board = document.createElement("div");
        this.card = document.createElement('div');
        this.title = document.createElement('p');
        this.active = false;

        //Set defaults//
        this.colStart = 0;
        this.rowStart = 0;
        this.width = 3;
        this.height = 3;
    }

    update(){
        if(this.active)
           this.setViewActive();
        else
            this.setViewCollapsed(this.colStart, this.rowStart);
    }

    setViewActive(){
        this.active = true;
        this.board.style.setProperty("background-color", this.elementManager.mediumColor);
        this.board.style.setProperty("top", "50%");
        this.board.style.setProperty("left", "50%");
        this.board.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.board.style.setProperty("transform", "translate(-50%, -50%)");
        this.board.style.setProperty("background", this.elementManager.mediumColor);
        if(this.elementManager.darkMode)
            this.board.style.setProperty("color", this.elementManager.lightColor);
        else
            this.board.style.setProperty("color", this.elementManager.darkColor);
        this.board.style.setProperty("padding", "0");
        this.board.style.setProperty("overflow-wrap", "break-word");
        this.board.style.fontFamily = "OpenDyslexic";
        this.board.style.borderRadius = '10px'; // standard
        this.board.style.MozBorderRadius = '10px'; // Mozilla
        this.board.style.WebkitBorderRadius = '10px'; // WebKit
        this.board.style.borderWidth = "3px";
        this.board.style.borderStyle = "solid";
        this.board.style.borderColor = this.elementManager.darkColor;
        this.width = this.elementManager.numColumns;
        this.height = this.elementManager.numRows;

        if(this.elementManager.orientation == "landscape"){
            this.colStart = (this.width - this.height)/2;
            this.rowStart = 0;
            this.width = this.height;
        }
        else{
            this.colStart = 0;
            this.rowStart = (this.height - this.width)/2;
            this.height = this.width;
        }
        this.setBoard();

        if(this.elementManager.darkMode)
            this.card.style.setProperty("background-color", this.elementManager.darkColor);
        else
            this.card.style.setProperty("background-color", this.elementManager.lightColor);
        this.card.style.setProperty("position", "fixed");
        this.card.style.setProperty("top", "50%");
        this.card.style.setProperty("left", "50%");
        this.card.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.card.style.setProperty("transform", "translate(-50%, -50%)");
        //this.card.style.width = "100%";
        //this.card.style.height = "56.25%";
        this.card.style.width = "320px";
        this.card.style.height = "180px";

        let scale = parseInt(this.board.style.width)/320;
        this.card.style.zoom = scale;

        this.board.appendChild(this.elementManager.guide.getGuide());
        this.board.appendChild(this.card);

    }

    setBoard(){
        this.board.style.setProperty("position", "fixed");

        this.board.style.width = this.width * this.elementManager.gridItemSize - 2 + "px";
        this.board.style.height =this.height *this.elementManager.gridItemSize - 2 + "px";
    }
}
