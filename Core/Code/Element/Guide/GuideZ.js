/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const states = ["away", "focus", "rest", "happy", "super"];

/* ObjZ element */
export default class GuideZ extends ElementZ{

    constructor() {
        super("guideZ");

        this.state = "away";
        this.guide = document.createElement("div");
        this.guideImg = document.createElement("img");
        this.guideFilter = document.createElement("div");
    }

    start(){

    }

    update(){

    }

    getView(){

        if(this.state != "away"){
            this.guide.style.setProperty("background-color", this.elementController.darkColor);
            this.guide.style.setProperty("position", "fixed");
            this.guide.style.setProperty("left", "50%");
            this.guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guide.style.setProperty("transform", "translate(-50%, 0)");
            this.guide.style.height = "100px";
            this.guide.style.width = "100px";
            this.guide.style.setProperty("border-radius", "50%");

            this.guideImg.src = "/Core/Asset/Image/Guide/FuZ/FuZ_"+this.state+".png";
            this.guideImg.style.setProperty("position", "fixed");
            this.guideImg.style.setProperty("top", "5%");
            this.guideImg.style.setProperty("left", "50%");
            this.guideImg.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guideImg.style.setProperty("transform", "translate(-50%, 0)");
            this.guideImg.style.width = "90%";
            this.guideImg.style.height = "90%";

            //this.guideFilter.style.setProperty("background-color", this.elementController.themeColor);
            //this.guideFilter.style.setProperty("position", "fixed");
            //this.guideFilter.style.setProperty("top", "5%");
            //this.guideFilter.style.setProperty("left", "50%");
            //this.guideFilter.style.setProperty("opacity", "25%");
            //this.guideFilter.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            //this.guideFilter.style.setProperty("transform", "translate(-50%, 0)");
            //this.guideFilter.style.height = "90%";
            //this.guideFilter.style.width = "90%";
            //this.guideFilter.style.setProperty("border-radius", "50%");

            this.guide.appendChild(this.guideImg);
            //this.guide.appendChild(this.guideFilter);
        }

        return this.guide;
    }
}
