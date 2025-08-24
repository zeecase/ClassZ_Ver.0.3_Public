/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const guideFolder = "/Core/Asset/Image/Guide/";
const emotes = ["away", "focus", "rest", "left", "right", "up", "down", "tense",
               "sus", "worry", "blink", "question", "happy", "super"
              ];

/* ObjZ element */
export default class GuideZ extends ElementZ{

    constructor(id) {
        id = "FuZ";
        super(id);

        this.emote = "rest";
        this.guide = document.createElement("div");
        this.guideBody = document.createElement("img");
        this.guideEyeL = document.createElement("img");
        this.guideEyeR = document.createElement("img");
        this.guideAccessory = document.createElement("img");

        this.guide.appendChild(this.guideBody);
        this.guide.appendChild(this.guideEyeL);
        this.guide.appendChild(this.guideEyeR);
        this.guide.appendChild(this.guideAccessory);
    }

    start(){
        this.setGuide(this.emote);
    }

    update(){

    }

    setGuide(emote){
        this.emote = emote;
        this.guideBody.src = guideFolder + "Body/" + this.id + "_" + this.elementController.theme + ".png";

        if(emote == "focus"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_open.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_open.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "rest"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_closed.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_closed.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_rest.png";
        } else if(emote == "left"){

        } else if(emote == "right"){

        } else if(emote == "up"){

        } else if(emote == "down"){

        } else if(emote == "tense"){

        } else if(emote == "sus"){

        } else if(emote == "worry"){

        } else if(emote == "blink"){

        } else if(emote == "question"){

        } else if(emote == "happy"){

        } else if(emote == "super"){

        }
    }

    getView(){

        if(this.emote != "away"){
            this.guide.style.setProperty("background-color", this.elementController.colors.dark);
            this.guide.style.setProperty("position", "fixed");
            this.guide.style.setProperty("left", "50%");
            this.guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guide.style.setProperty("transform", "translate(-50%, 0)");
            this.guide.style.height = "100px";
            this.guide.style.width = "100px";
            this.guide.style.setProperty("border-radius", "50%");

            this.guideBody.style.setProperty("position", "fixed");
            this.guideBody.style.setProperty("top", "5%");
            this.guideBody.style.setProperty("left", "50%");
            this.guideBody.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guideBody.style.setProperty("transform", "translate(-50%, 0)");
            this.guideBody.style.width = "90%";
            this.guideBody.style.height = "90%";

            this.guideEyeL.style.setProperty("position", "fixed");
            this.guideEyeL.style.setProperty("top", "5%");
            this.guideEyeL.style.setProperty("left", "50%");
            this.guideEyeL.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guideEyeL.style.setProperty("transform", "translate(-50%, 0)");
            this.guideEyeL.style.width = "90%";
            this.guideEyeL.style.height = "90%";

            this.guideEyeR.style.setProperty("position", "fixed");
            this.guideEyeR.style.setProperty("top", "5%");
            this.guideEyeR.style.setProperty("left", "50%");
            this.guideEyeR.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guideEyeR.style.setProperty("transform", "translate(-50%, 0)");
            this.guideEyeR.style.width = "90%";
            this.guideEyeR.style.height = "90%";

            this.guideAccessory.style.setProperty("position", "fixed");
            this.guideAccessory.style.setProperty("top", "5%");
            this.guideAccessory.style.setProperty("left", "50%");
            this.guideAccessory.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.guideAccessory.style.setProperty("transform", "translate(-50%, 0)");
            this.guideAccessory.style.width = "90%";
            this.guideAccessory.style.height = "90%";

        }

        return this.guide;
    }
}
