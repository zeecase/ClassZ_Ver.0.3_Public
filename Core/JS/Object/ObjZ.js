/* Import */
import ElementManager from '/Core/JS/Manager/ElementManager.js';
/*  */

/* ObjZ element */
export default class ObjZ{

    constructor(elementManager) {

        //Set element manager//
        this.elementManager = elementManager;

        this.object = document.createElement("div");
        this.board = document.createElement('div');
        this.title = document.createElement('p');
        this.style = this.object.style;
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

    getGuide(){
        let guide = document.createElement("img");
        guide.src = "/Core/Asset/Image/Guide/FuZ.png";
        guide.style.setProperty("position", "fixed");
        guide.style.setProperty("top", "5px");
        guide.style.setProperty("left", "50%");
        guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
        guide.style.setProperty("transform", "translate(-50%, 0)");
        guide.style.width = "20%";
        guide.style.height = "20%";

        return guide;
    }

    setViewActive(){
        this.active = true;
        this.style.setProperty("background-color", this.elementManager.mediumColor);
        this.style.setProperty("top", "50%");
        this.style.setProperty("left", "50%");
        this.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.style.setProperty("transform", "translate(-50%, -50%)");
        this.style.setProperty("background", this.elementManager.mediumColor);
        this.style.setProperty("color", this.elementManager.darkColor);
        this.style.setProperty("padding", "0");
        this.style.setProperty("overflow-wrap", "break-word");
        this.style.fontFamily = "OpenDyslexic";
        this.style.borderRadius = '10px'; // standard
        this.style.MozBorderRadius = '10px'; // Mozilla
        this.style.WebkitBorderRadius = '10px'; // WebKit
        this.style.borderWidth = "3px";
        this.style.borderStyle = "solid";
        this.style.borderColor = this.elementManager.darkColor;
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
        this.setObject();

        this.board.style.setProperty("background-color", this.elementManager.lightColor);
        this.board.style.setProperty("position", "fixed");
        this.board.style.setProperty("top", "50%");
        this.board.style.setProperty("left", "50%");
        this.board.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.board.style.setProperty("transform", "translate(-50%, -50%)");
        //this.board.style.width = "100%";
        //this.board.style.height = "56.25%";
        this.board.style.width = "320px";
        this.board.style.height = "180px";

        let scale = parseInt(this.style.width)/320;
        this.board.style.zoom = scale;

        this.object.appendChild(this.getGuide());
        this.object.appendChild(this.board);

    }

    setObject(){
        this.style.setProperty("position", "fixed");

        this.style.width = this.width * this.elementManager.gridItemSize - 2 + "px";
        this.style.height =this.height *this.elementManager.gridItemSize - 2 + "px";
    }
}
