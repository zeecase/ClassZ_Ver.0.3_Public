/* Import */
import ElementManager from '/Core/JS/Manager/ElementManager.js';
/*  */

/* ObjZ element */
export default class ObjZ{

    constructor(elementManager) {

        //Set element manager//
        this.elementManager = elementManager;

        this.object = document.createElement("div");
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

    setObject(){
        this.style.setProperty("position", "fixed");
        this.style.setProperty("margin", "1px");
        this.style.borderRadius = '10px'; // standard
        this.style.MozBorderRadius = '10px'; // Mozilla
        this.style.WebkitBorderRadius = '10px'; // WebKit
        this.style.borderWidth = "1px";
        this.style.borderStyle = "solid";
        this.style.borderColor = this.elementManager.darkColor;
        this.style.width = this.width * this.elementManager.gridItemSize - 2 + "px";
        this.style.height =this.height *this.elementManager.gridItemSize - 2 + "px";
    }

    setViewActive(){
        this.active = true;
        this.style.setProperty("top", "50%");
        this.style.setProperty("left", "50%");
        this.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.style.setProperty("transform", "translate(-50%, -50%)");
        this.width = this.elementManager.numColumns+1;
        this.height = this.elementManager.numRows+1;

        if(this.width > this.height){
            this.colStart = (this.width - this.height)/2;
            this.rowStart = 0;
            this.width = this.height;
        }
        else
            this.colStart = 0;
            this.rowStart = (this.height - this.width)/2;
            this.height = this.width;

        this.setObject();
    }

    setViewCollapsed(colStart, rowStart){
        this.active = false;

        this.colStart = colStart;
        this.rowStart = rowStart;
        this.width = 3;
        this.height = 3;

        let left = (this.colStart * this.elementManager.gridItemSize);
        let top = (this.rowStart * this.elementManager.gridItemSize);
        this.style.setProperty("left", left + "px");
        this.style.setProperty("top", top + "px");

        this.setObject();
    }
}
