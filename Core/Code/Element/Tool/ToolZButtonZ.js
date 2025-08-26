/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

/* Manage Goal elements */
export default class ToolZButtonZ extends ToolZ {
    /* Set properties */
    constructor(id) {
        super(id);
    }

    getButton(type){
        let button = document.createElement('div');

        button.style.setProperty("background-color", this.elementController.colors.light);
        button.style.width = "50px";
        button.style.height = "50px";
        button.style.borderRadius = "10px"; // standard
        button.style.MozBorderRadius = "10px"; // Mozilla
        button.style.WebkitBorderRadius = "10px"; // WebKit
        button.style.borderWidth = "3px";
        button.style.borderStyle = "solid";
        button.style.borderColor = this.elementController.colors.dark;

        //TODO: get button image//
        button.innerHTML = type;
        button.style.setProperty("text-align", "center");

        let self = this;
        button.addEventListener("click", function(){self.clickButton(type);});

        return button;
    }

    clickButton(type){
        if(type == "add")
            this.subscribers[0].add();
        else if(type == "delete")
            this.subscribers[0].delete();
        else if(type == "left")
            this.subscribers[0].left();
        else if(type == "right")
            this.subscribers[0].right();
        else if(type == "up")
            this.subscribers[0].up();
        else if(type == "down")
            this.subscribers[0].down();
    }
}
