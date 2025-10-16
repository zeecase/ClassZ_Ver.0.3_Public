/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

/* Manage Goal elements */
export default class ToolZBoxZ extends ToolZ {
    /* Set properties */
    constructor(id) {
        super(id);

        this.toollist = ["+", "-", "<", ">", + "^" + "v"];
    }

    getTool(type){
        let tool = document.createElement('div');

        tool.style.setProperty("background-color", this.elementController.colors.light);
        tool.style.setProperty("color", this.elementController.colors.dark);
        tool.style.width = this.elementController.getSize(0.8) + "px";
        tool.style.height = this.elementController.getSize(0.8) + "px";
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

    getToolbox(){
        if(this.toolBox.length != 0)
            return this.toolBox;
        else {
            return [ ['-','+','','','','','','',''],
                    ['^','','','','','','','',''],
                    ['v','','','','','','','',''],
                    ['<','>','','','','','','','']
                ];
        }
    }

    addTools(toolBox){
        for(let x=0; x < 4; x++){
            let row = document.createElement("tr");
            for(let t=0; t < 9; t++){
                let tool = toolBox[x][t];
                let cell = document.createElement("td");
                cell.style.width = "10%";
                if(tool != '')
                    cell.appendChild(this.boxTool.getTool(tool));
                row.appendChild(cell);
            }

            if(x<this.boxTool.toolTopSize){
                //add tool row to top view
                this.toolTop.appendChild(row);
            } else {
                //add tool row to bottom view
                this.toolBottom.appendChild(row);
            }
        }
    }
}
