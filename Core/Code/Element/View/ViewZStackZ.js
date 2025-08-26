/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manage Goal elements */
export default class ViewZStackZ extends ViewZ {
    /* Set properties */
    constructor(id) {
        super(id);
        this.favorite = 2;
    }

    start(){
        super.start();
        this.buttonTool = this.elementController.subscribe(this, "toolZButtonZ");
    }

    left(){
        console.log("Back");
    }

    right(){
        console.log("Next");
    }

    setViewActive(){

        let back = this.buttonTool.getButton("left");
        let next = this.buttonTool.getButton("right");

        back.style.setProperty("position", "fixed");
        back.style.setProperty("left", "10px");
        back.style.setProperty("top", "50%");
        back.style.setProperty("transform", "translate(0, -50%)");

        next.style.setProperty("position", "fixed");
        next.style.setProperty("right", "10px");
        next.style.setProperty("top", "50%");
        next.style.setProperty("transform", "translate(0, -50%)");

        this.viewBottom.appendChild(back);
        this.viewBottom.appendChild(next);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.colors.medium);
        this.view.style.setProperty("color", this.elementController.colors.light);
        this.view.style.setProperty("font-size", "0.8em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let title = document.createElement('p');
        title.innerHTML = "StackZ";

        this.card.appendChild(title);
    }
}
/*  */
