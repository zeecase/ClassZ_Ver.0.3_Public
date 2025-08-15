/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

const maxSize = 9.5;
const minSize = 1.5;

/* ObjZ element */
export default class ViewZ{

    constructor(elementController) {

        //Set element controller//
        this.elementController = elementController;
        this.id = "";
        this.favorite = -1;
        this.colStart = 0;
        this.rowStart = 0;

        this.guide = this.elementController.getGuide();

        this.view = document.createElement("div");
        this.viewTop = document.createElement("div");
        this.card = document.createElement('div');
        this.viewBottom = document.createElement("div");
    }

    updateView(){
        this.card.innerHTML = "";

        if(this.elementController.getActive() == this.id){
            this.viewTop.appendChild(this.guide);
            this.view.appendChild(this.card);
            this.view.appendChild(this.viewTop);
            this.view.appendChild(this.viewBottom);

            this.view.style.height = this.elementController.getSize(maxSize) + "px";
            this.view.style.width = this.elementController.getSize(maxSize) + "px";
            this.view.style.setProperty("position", "fixed");
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

            this.viewTop.style.setProperty("position", "fixed");
            this.viewTop.style.setProperty("background-color", this.elementController.mediumColor);
            this.viewTop.style.width = "100%";
            this.viewTop.style.height = this.elementController.getSize(2) + "px";
            this.viewTop.style.setProperty("top", "0");
            this.viewTop.style.setProperty("left", "50%");
            this.viewTop.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.viewTop.style.setProperty("transform", "translate(-50%, 0)");
            this.viewTop.style.borderRadius = '10px'; // standard
            this.viewTop.style.MozBorderRadius = '10px'; // Mozilla
            this.viewTop.style.WebkitBorderRadius = '10px'; // WebKit
            this.viewTop.style.borderWidth = "3px";
            this.viewTop.style.borderStyle = "solid";
            this.viewTop.style.borderColor = this.elementController.darkColor;

            let scale = parseInt(this.viewTop.style.height)/parseInt(this.guide.style.height);
            this.guide.style.zoom = scale;

            this.card.style.setProperty("position", "fixed");
            this.card.style.setProperty("top", "50%");
            this.card.style.setProperty("left", "50%");
            this.card.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
            this.card.style.setProperty("transform", "translate(-50%, -50%)");
            this.card.style.setProperty("font-size", "1em");

            let size = 250;
            this.card.style.width = size + "px";
            this.card.style.height = size*0.5625 + "px";

            scale = parseInt(this.view.style.width)/size;
            this.card.style.zoom = scale;

            this.viewBottom.style.setProperty("position", "fixed");
            this.viewBottom.style.setProperty("background-color", this.elementController.mediumColor);
            this.viewBottom.style.width = "100%";
            this.viewBottom.style.height = this.elementController.getSize(2) + "px";
            this.viewBottom.style.setProperty("bottom", "0");
            this.viewBottom.style.setProperty("left", "50%");
            this.viewBottom.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.viewBottom.style.setProperty("transform", "translate(-50%, 0)");
            this.viewBottom.style.borderRadius = '10px'; // standard
            this.viewBottom.style.MozBorderRadius = '10px'; // Mozilla
            this.viewBottom.style.WebkitBorderRadius = '10px'; // WebKit
            this.viewBottom.style.borderWidth = "3px";
            this.viewBottom.style.borderStyle = "solid";
            this.viewBottom.style.borderColor = this.elementController.darkColor;


            this.setViewActive();
        }
        else{
            this.view.appendChild(this.card);

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
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                }
            } else {
                if(this.favorite == 1){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                }
            }

            this.card.style.width = "100%";
            this.card.style.height = "100%";
            this.setViewCollapsed();
        }
        console.log(this.id + " view update");
    }

     getElement(){
        this.updateView();
        return this.view;
     }
}
