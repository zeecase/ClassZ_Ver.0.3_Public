/* Import */
import BackgroundZ from '/Core/Code/Element/Background/BackgroundZ.js';
/*  */

/* ObjZ element */
export default class BackgroudZClassZ extends BackgroundZ{
    constructor(id) {
        super(id);

        this.gradient = "";
    }

    update(){
        this.gradient = "linear-gradient(";
        if( this.elementController.orientation == "landscape")
            this.gradient+= "-9";
        this.gradient += "0deg, " + this.elementController.colors.dark + " 50%, ";
        if(this.elementController.darkMode)
            this.gradient += this.elementController.colors.medium + " 100%)";
        else
            this.gradient += this.elementController.colors[this.elementController.theme] + " 100%)";
        this.backgroundFilter.style.setProperty("background", this.gradient);
    }

    getView(){
        this.update();
        super.setView("Texture_Full.jpg");

        return this.background;
    }
}
/* */
