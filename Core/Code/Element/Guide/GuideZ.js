/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const guideFolder = "/Core/Asset/Image/Guide/";
const emotes = ["away", "focus", "rest", "left", "right", "up", "down", "angry",
               "amuse", "sad", "blink", "annoy", "happy", "question"
              ];

/* ObjZ element */
export default class GuideZ extends ElementZ{

    constructor(id) {
        super(id);

        this.emote = "focus";
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

        if(emote == "focus"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_open.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_open.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "rest"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_closed.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_closed.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_rest.png";
        } else if(emote == "left"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_side.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_side.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_side.png";
        } else if(emote == "right"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_side.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_side.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_side.png";
        } else if(emote == "up"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_up.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_up.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_up.png";
        } else if(emote == "down"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_down.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_down.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_down.png";
        } else if(emote == "angry"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_low.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_low.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_low.png";
        } else if(emote == "amuse"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_high.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_high.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "sad"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_sad.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_sad.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "blink"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_open.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_happy.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_rest.png";
        } else if(emote == "annoy"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_high.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_open.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "happy"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_happy.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_happy.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else if(emote == "question"){
            this.guideEyeL.src = guideFolder + "Eye/Left/" + this.id + "_open.png";
            this.guideEyeR.src = guideFolder + "Eye/Right/" + this.id + "_sad.png";
            this.guideAccessory.src = guideFolder + "Accessory/" + this.id + "_high.png";
        } else {
            this.emote = "away";
        }
    }

    setView(image){

        if(this.emote != "away"){
            this.guide.style.setProperty("background-color", this.elementController.colors.dark);
            this.guide.style.setProperty("position", "fixed");
            if(this.emote == "right"){
                this.guide.style.setProperty("right", "50%");
                this.guide.style.setProperty("-webkit-transform", "scaleX(-1) translate(-50%, 0)");
                this.guide.style.setProperty("transform", "scaleX(-1) translate(-50%, 0)");
            } else {
                this.guide.style.setProperty("left", "50%");
                this.guide.style.setProperty("-webkit-transform", "translate(-50%, 0)");
                this.guide.style.setProperty("transform", "translate(-50%, 0)");
            }
            this.guide.style.height = "100px";
            this.guide.style.width = "100px";
            this.guide.style.setProperty("border-radius", "50%");

            this.guideBody.src = guideFolder + image;
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
    }
}
