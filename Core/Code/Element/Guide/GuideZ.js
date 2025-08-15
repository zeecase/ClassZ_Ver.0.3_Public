/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

/* ObjZ element */
export default class GuideZ{

    constructor(elementController) {

        //Set element controller//
        this.elementController = elementController;
    }

    update(){

    }

    getGuide(){

        let guide = document.createElement("div");
        guide.style.setProperty("background-color", this.elementController.darkColor);
        guide.style.setProperty("position", "fixed");

        guide.style.setProperty("left", "50%");
        guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
        guide.style.setProperty("transform", "translate(-50%, 0)");
        guide.style.width = this.elementController.getSize(2) + "px";
        guide.style.height = this.elementController.getSize(2) + "px";
        guide.style.setProperty("border-radius", "50%");
        //guide.style.setProperty("box-shadow", "0 0 0 3px " + this.elementController.darkColor);

        let guideImg = document.createElement("img");
        guideImg.src = "/Core/Asset/Image/Guide/FuZ.png";
        guideImg.style.setProperty("position", "fixed");
        guideImg.style.setProperty("top", "5%");
        guideImg.style.setProperty("left", "50%");
        guideImg.style.setProperty("-webkit-transform", "translate(-50%, 0)");
        guideImg.style.setProperty("transform", "translate(-50%, 0)");
        guideImg.style.width = "90%";
        guideImg.style.height = "90%";

        guide.appendChild(guideImg);

        return guide;
    }
}
