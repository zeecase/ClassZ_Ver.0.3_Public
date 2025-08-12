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

    setViewActive(){
        this.active = true;
        this.style.setProperty("top", "50%");
        this.style.setProperty("left", "50%");
        this.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.style.setProperty("transform", "translate(-50%, -50%)");
        this.style.setProperty("z-index", "0");
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
    }

    setObject(){
        this.style.setProperty("position", "fixed");

        this.style.width = this.width * this.elementManager.gridItemSize - 2 + "px";
        this.style.height =this.height *this.elementManager.gridItemSize - 2 + "px";
    }
}
