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
        button.style.setProperty("color", this.elementController.colors.dark);
        button.style.width = this.elementController.getSize(1) + "px";
        button.style.height = this.elementController.getSize(1) + "px";
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
        for(let x=0; x< this.subscribers.length; x++){
            if(this.subscribers[x].id == this.elementController.active){
                switch (type) {
                    case "add":
                        this.subscribers[x].add();
                        break;
                    case "delete":
                        this.subscribers[x].delete();
                        break;
                    case "left":
                        this.subscribers[x].left();
                        break;
                    case "right":
                        this.subscribers[x].right();
                        break;
                    case "up":
                        this.subscribers[x].up();
                        break;
                    case "down":
                        this.subscribers[x].down();
                        break;
                    default:
                        console.log("Button doesn't have a function");
                }
            }
        }

    }
}
