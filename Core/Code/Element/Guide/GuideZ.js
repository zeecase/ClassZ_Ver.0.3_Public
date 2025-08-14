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
        guide.style.setProperty("top", "3px");
        guide.style.setProperty("left", "50%");
        guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
        guide.style.setProperty("transform", "translate(-50%, 0)");
        guide.style.width = "20%";
        guide.style.height = "20%";
        guide.style.setProperty("border-radius", "50%");
        //guide.style.setProperty("box-shadow", "0 0 0 3px " + this.elementController.darkColor);

        let guideImg = document.createElement("img");
        guideImg.src = "/Core/Asset/Image/Guide/FuZ.png";
        guideImg.style.setProperty("position", "fixed");
        guideImg.style.setProperty("top", "2px");
        guideImg.style.setProperty("left", "50%");
        guideImg.style.setProperty("-webkit-transform", "translate(-50%, 0)");
        guideImg.style.setProperty("transform", "translate(-50%, 0)");
        guideImg.style.width = "95%";
        guideImg.style.height = "95%";

        guide.appendChild(guideImg);

        return guide;
    }
}
