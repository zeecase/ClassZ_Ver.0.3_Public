/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const guideFolder = "/Core/Asset/Image/Guide/";
const emotes = ["away", "focus", "rest", "left", "right", "up", "down", "tense", "worry", "blink", "question", "happy", "super"];

/* ObjZ element */
export default class GuideZ extends ElementZ{

    constructor(id) {
        super(id);

        this.emote = "away";
        this.guide = document.createElement("div");
        this.guideBody = document.createElement("img");
        this.guideEyeL = document.createElement("img");
        this.guideEyeR = document.createElement("img");
        this.guideAccessory = document.createElement("img");
    }

    start(){

    }

    update(){

    }

    getView(){

        if(this.emote != "away"){
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

            this.guide.appendChild(this.guideImg);
        }

        return this.guide;
    }
}
