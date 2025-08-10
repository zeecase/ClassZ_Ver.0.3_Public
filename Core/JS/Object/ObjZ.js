/* Import */
import ElementManager from '/Core/JS/Manager/ElementManager.js';
/*  */

/* ObjZ element */
export default class ObjZ{

    constructor(elementManager, id) {

        //Set element manager//
        this.elementManager = elementManager;

        //Set ID//
        this.id = id;

        this.object = document.createElement("div");
        this.style = this.object.style;

        //Set defaults//
        this.colStart = 0;
        this.rowStart = 0;
        this.width = 3;
        this.height = 3;

        this.setObject();
    }

    setObject(){
        this.style.setProperty("position", "fixed");
        this.style.setProperty("margin", "1px");
        this.style.setProperty("left",this.colStart * this.elementManager.gridItemSize);
        this.style.setProperty("top", this.rowStart * this.elementManager.gridItemSize);
        this.style.width = this.width * this.elementManager.gridItemSize - 2 + "px";
        this.style.height =this.height *this.elementManager.gridItemSize - 2 + "px";
        this.style.borderRadius = '10px'; // standard
        this.style.MozBorderRadius = '10px'; // Mozilla
        this.style.WebkitBorderRadius = '10px'; // WebKit
        this.style.borderWidth = "1px";
        this.style.borderStyle = "solid";
        this.style.borderColor = this.elementManager.darkColor;

    }

    setViewProperties(colStart, rowStart, width, height){
        this.colStart = colStart;
        this.rowStart = rowStart;
        this.width = width;
        this.height = height;
    }
}
