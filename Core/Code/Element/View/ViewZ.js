/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

const maxSize = 10;

/* ObjZ element */
export default class ViewZ{

    constructor(elementController) {

        //Set element controller//
        this.elementController = elementController;
        this.id = "";
        this.favorite = -1;

        this.view = document.createElement("div");
        this.card = document.createElement('div');
        this.title = document.createElement('p');

        //Set defaults//
        this.colStart = 0;
        this.rowStart = 0;
        this.width = 3;
        this.height = 3;
    }

    update(){

    }

    setViewActive(){
        this.width = this.elementController.numColumns;
        this.height = this.elementController.numRows;
        this.setView();

        this.view.style.setProperty("background-color", this.elementController.mediumColor);
        if(this.elementController.darkMode)
            this.view.style.setProperty("color", this.elementController.lightColor);
        else
            this.view.style.setProperty("color", this.elementController.darkColor);
        this.view.style.setProperty("top", "50%");
        this.view.style.setProperty("left", "50%");
        this.view.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.view.style.setProperty("transform", "translate(-50%, -50%)");
        this.view.style.setProperty("background", this.elementController.mediumColor);
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.borderRadius = '10px'; // standard
        this.view.style.MozBorderRadius = '10px'; // Mozilla
        this.view.style.WebkitBorderRadius = '10px'; // WebKit
        this.view.style.borderWidth = "3px";
        this.view.style.borderStyle = "solid";
        this.view.style.borderColor = this.elementController.darkColor;

        if(this.elementController.orientation == "landscape"){
            this.colStart = (this.width - this.height)/2;
            this.rowStart = 0;
            this.width = this.height;
        }
        else{
            this.colStart = 0;
            this.rowStart = (this.height - this.width)/2;
            this.height = this.width;
        }

        if(this.elementController.darkMode)
            this.card.style.setProperty("background-color", this.elementController.darkColor);
        else
            this.card.style.setProperty("background-color", this.elementController.lightColor);
        this.card.style.setProperty("position", "fixed");
        this.card.style.setProperty("top", "50%");
        this.card.style.setProperty("left", "50%");
        this.card.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.card.style.setProperty("transform", "translate(-50%, -50%)");
        this.card.style.width = "320px";
        this.card.style.height = "180px";

        let scale = parseInt(this.view.style.width)/320;
        this.card.style.zoom = scale;

        this.view.appendChild(this.elementController.guide.getGuide());
        this.view.appendChild(this.card);

    }

    setViewCollapsed(colStart, rowStart){
        this.colStart = colStart;
        this.rowStart = rowStart;
        this.width = 3;
        this.height = 3;
        this.setView();

        this.view.style.setProperty("left", "auto");
        this.view.style.setProperty("right", "auto");
        this.view.style.setProperty("top", "auto");
        this.view.style.setProperty("bottom", "auto");
        this.view.style.setProperty("z-index", "1");

        if(this.favorite == 0){
            this.view.style.setProperty("left", this.getSize(this.colStart) + "%");
            this.view.style.setProperty("top", this.getSize(this.rowStart) + "%");
        } else if(this.favorite == 3){
            this.view.style.setProperty("right", this.getSize(this.colStart) + "%");
            this.view.style.setProperty("bottom", this.getSize(this.rowStart) + "%");
        }

        if(this.elementController.orientation == "landscape"){
            if(this.favorite == 1){
                this.view.style.setProperty("right", this.getSize(this.colStart) + "%");
                this.view.style.setProperty("top", this.getSize(this.rowStart) + "%");
            }
            if(this.favorite == 2){
                this.view.style.setProperty("left", this.getSize(this.colStart) + "%");
                this.view.style.setProperty("top", this.getSize(this.rowStart) + "%");
            }
        } else {
            if(this.favorite == 1){
                this.view.style.setProperty("left", this.getSize(this.colStart) + "%");
                this.view.style.setProperty("bottom", this.getSize(this.rowStart) + "%");
            } else if(this.favorite == 2){
                this.view.style.setProperty("right", this.getSize(this.colStart) + "%");
                this.view.style.setProperty("bottom", this.getSize(this.rowStart) + "%");
            }
        }
    }

    setView(){
        this.view.style.setProperty("position", "fixed");

        this.view.style.width = this.elementController.getGridItemSize(this.width) + "%";
        this.view.style.height = this.elementController.getGridItemSize(this.height) + "%";
    }
}
