/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const backgroundFolder = "/Core/Asset/Image/Background/";

/* ObjZ element */
export default class BackgroudZ extends ElementZ{
    constructor(id) {
        super(id);

        this.background = document.createElement('div');
        this.backgroundImg = document.createElement("img");
        this.backgroundFilter = document.createElement("div");
    }

    start(){

    }

    update(){

    }

    setView(image){
        this.background.style.setProperty("width", "100vw");
        this.background.style.setProperty("height", "100vh");
        this.background.appendChild(this.backgroundImg);
        this.background.appendChild(this.backgroundFilter);

        this.backgroundImg.src = backgroundFolder + image;
        this.backgroundImg.style.setProperty("position", "fixed");
        this.backgroundImg.style.setProperty("top", "50%");
        this.backgroundImg.style.setProperty("left", "50%");
        this.backgroundImg.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.backgroundImg.style.setProperty("transform", "translate(-50%, -50%)");

        this.backgroundFilter.style.setProperty("position", "fixed");
        this.backgroundFilter.style.setProperty("width", "100%");
        this.backgroundFilter.style.setProperty("height", "100%");
        this.backgroundFilter.style.setProperty("opacity", "75%");
    }
}
/* */
