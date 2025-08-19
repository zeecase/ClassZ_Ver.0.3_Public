/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

/* ObjZ element */
export default class BackgroudZ extends ElementZ{
    constructor() {
        super("backgroundZ");

        this.background = document.createElement('div');
        this.backgroundImg = document.createElement("img");
        this.backgroundFilter = document.createElement("div");
    }

    start(){

    }

    update(){
        let gradient = "linear-gradient(";
        if( this.elementController.orientation == "landscape")
            gradient+= "-9";
        gradient += "0deg, " + this.elementController.darkColor + " 50%, ";
        if(this.elementController.darkMode)
            gradient += this.elementController.mediumColor + " 100%)";
        else
            gradient += this.elementController.themeColor + " 100%)";
        this.backgroundFilter.style.setProperty("background", gradient);
    }

    getView(){
        this.background.style.setProperty("width", "100vw");
        this.background.style.setProperty("height", "100vh");
        this.background.appendChild(this.backgroundImg);
        this.background.appendChild(this.backgroundFilter);

        this.backgroundImg.src = this.elementController.getBackgroundImg();
        this.backgroundImg.style.setProperty("position", "fixed");
        this.backgroundImg.style.setProperty("top", "50%");
        this.backgroundImg.style.setProperty("left", "50%");
        this.backgroundImg.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.backgroundImg.style.setProperty("transform", "translate(-50%, -50%)");

        this.backgroundFilter.style.setProperty("position", "fixed");
        this.backgroundFilter.style.setProperty("width", "100%");
        this.backgroundFilter.style.setProperty("height", "100%");
        this.backgroundFilter.style.setProperty("opacity", "75%");
        this.update();

        return this.background;
    }
}
/* */
