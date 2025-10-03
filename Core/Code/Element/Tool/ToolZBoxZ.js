/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

/* Manage Goal elements */
export default class ToolZBoxZ extends ToolZ {
    /* Set properties */
    constructor(id) {
        super(id);

        this.toollist = ["+", "-", "<", ">", + "^" + "v"];

        this.toolBox = [ ['','','','','','','','','^',''],
                        ['','','','','','','','<','','>'],
                        ['','','','','','','','','v',''],
                        ['-','+','','','','','','','','']
        ];

        this.toolTopSize = 0;
        this.toolBottomSize = 4-this.toolTopSize;
    }

    getTool(type){
        let tool = document.createElement('div');

        tool.style.setProperty("background-color", this.elementController.colors.light);
        tool.style.setProperty("color", this.elementController.colors.dark);
        //tool.style.width = this.elementController.getSize(1) + "px";
        //tool.style.height = this.elementController.getSize(1) + "px";
        tool.style.borderRadius = "10px"; // standard
        tool.style.MozBorderRadius = "10px"; // Mozilla
        tool.style.WebkitBorderRadius = "10px"; // WebKit
        tool.style.borderWidth = "3px";
        tool.style.borderStyle = "solid";
        tool.style.borderColor = this.elementController.colors.dark;

        //TODO: get tool image//
        tool.innerHTML = type;
        tool.style.setProperty("text-align", "center");

        let self = this;
        tool.addEventListener("click", function(){self.clickButton(type);});

        return tool;
    }

    clickTool(type){
        for(let x=0; x< this.subscribers.length; x++){
            if(this.subscribers[x].id == this.elementController.active){
                switch (type) {
                    case "+":
                        this.subscribers[x].add();
                        break;
                    case "-":
                        this.subscribers[x].min();
                        break;
                    case "<":
                        this.subscribers[x].left();
                        break;
                    case ">":
                        this.subscribers[x].right();
                        break;
                    case "^":
                        this.subscribers[x].up();
                        break;
                    case "v":
                        this.subscribers[x].down();
                        break;
                    default:
                        console.log("Button doesn't have a function");
                }
            }
        }

    }
}
