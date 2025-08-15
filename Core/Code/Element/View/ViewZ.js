/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

const maxSize = 10;
const minSize = 2;

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
        this.view.appendChild(this.card);

        this.colStart = 0;
        this.rowStart = 0;
    }

    update(){
        this.card.innerHTML ="";

        if(this.elementController.getActive() == this.id){
            this.view.style.height = this.elementController.getSize(maxSize) + "px";
            this.view.style.width = this.elementController.getSize(maxSize) + "px";
            this.view.style.setProperty("position", "fixed");
            this.view.style.setProperty("background-color", this.elementController.mediumColor);
            if(this.elementController.darkMode){
                this.card.style.setProperty("background-color", this.elementController.darkColor);
                this.view.style.setProperty("color", this.elementController.lightColor);
            } else {
                this.card.style.setProperty("background-color", this.elementController.lightColor);
                this.view.style.setProperty("color", this.elementController.darkColor);
            }
            this.view.style.setProperty("top", "50%");
            this.view.style.setProperty("left", "50%");
            this.view.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
            this.view.style.setProperty("transform", "translate(-50%, -50%)");
            this.view.style.setProperty("padding", "0");
            this.view.style.setProperty("overflow-wrap", "break-word");
            this.view.style.borderRadius = '10px'; // standard
            this.view.style.MozBorderRadius = '10px'; // Mozilla
            this.view.style.WebkitBorderRadius = '10px'; // WebKit
            this.view.style.borderWidth = "3px";
            this.view.style.borderStyle = "solid";
            this.view.style.borderColor = this.elementController.darkColor;

            this.card.style.setProperty("position", "fixed");
            this.card.style.setProperty("top", "50%");
            this.card.style.setProperty("left", "50%");
            this.card.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
            this.card.style.setProperty("transform", "translate(-50%, -50%)");
            this.card.style.setProperty("font-size", "1em");

            let min = this.elementController.getSize(0);
            this.card.style.width = min + "px";
            this.card.style.height = min*0.5625 + "px";

            let scale = parseInt(this.view.style.width)/min;
            this.card.style.zoom = scale;

            this.setViewActive();
        }
        else{
            this.colStart = 0;
            this.rowStart = 0;
            this.view.style.height = this.elementController.getSize(minSize) + "px";
            this.view.style.width = this.elementController.getSize(minSize) + "px";

            this.view.style.setProperty("position", "fixed");
            this.view.style.setProperty("left", "auto");
            this.view.style.setProperty("right", "auto");
            this.view.style.setProperty("top", "auto");
            this.view.style.setProperty("bottom", "auto");
            this.view.style.setProperty("z-index", "10");
            this.view.style.borderRadius = "10px"; // standard
            this.view.style.MozBorderRadius = "10px"; // Mozilla
            this.view.style.WebkitBorderRadius = "10px"; // WebKit
            this.view.style.borderWidth = "3px";
            this.view.style.borderStyle = "solid";
            this.view.style.borderColor = this.elementController.darkColor;

            if(this.favorite == 0){
                this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
            } else if(this.favorite == 3){
                this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
            }

            if(this.elementController.orientation == "landscape"){
                if(this.favorite == 1){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                }
            } else {
                if(this.favorite == 1){
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                }
            }

            //this.card.style.setProperty("position", "fixed");
            //this.card.style.setProperty("top", "0");
            //this.card.style.setProperty("left", "0");
            this.card.style.width = "100%";
            this.card.style.height = "100%";
            this.setViewCollapsed();
        }
    }

     getElement(){
        this.update();
        return this.view;
     }
}
