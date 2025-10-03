/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

const maxSize = 9.0;
const minSize = 1.8;

/* ObjZ element */
export default class ViewZ extends ElementZ{

    constructor(id) {
        super(id);

        this.favorite = -1;
        this.colStart = 0;
        this.rowStart = 0;

        this.view = document.createElement("div");
        this.viewTop = document.createElement("div");
        this.card = document.createElement('div');
        this.viewBottom = document.createElement("div");
        this.toolTop = document.createElement("table");
        this.toolBottom = document.createElement("table");

        this.view.id = id;
    }

    start(){
        this.guide = this.elementController.getGuide();
        this.timeTool = this.elementController.subscribe(this, "toolZTimeZ");
        this.boxTool = this.elementController.subscribe(this, "toolZBoxZ");
    }

    update(){

        this.view.attributeStyleMap.clear();
        this.card.attributeStyleMap.clear();
        this.view.innerHTML = "";
        this.card.innerHTML = "";
        this.view.id = this.id;

        if(this.elementController.active == this.view.id){
            this.viewTop.appendChild(this.toolTop);
            this.viewBottom.appendChild(this.toolBottom);
            this.view.appendChild(this.viewTop);
            this.view.appendChild(this.card);
            this.view.appendChild(this.viewBottom);

            let size = this.elementController.getSize(maxSize);
            let scale = parseInt(this.view.style.width)/size;

            this.view.style.height = size + "px";
            this.view.style.width = size + "px";
            this.view.style.setProperty("position", "fixed");
            this.view.style.setProperty("top", "50%");
            this.view.style.setProperty("left", "50%");
            if(this.elementController.darkMode){
                this.card.style.setProperty("background-color", this.elementController.colors.dark);
                this.view.style.setProperty("color", this.elementController.colors.light);
            } else {
                this.card.style.setProperty("background-color", this.elementController.colors.light);
                this.view.style.setProperty("color", this.elementController.colors.dark);
            }
            this.view.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
            this.view.style.setProperty("transform", "translate(-50%, -50%)");
            this.view.style.setProperty("padding", "0");
            this.view.style.setProperty("overflow-wrap", "break-word");

            this.viewTop.style.width = size + "px";
            this.viewTop.style.height = this.elementController.getSize(this.boxTool.toolTopSize) + "px";
            this.viewTop.style.zoom = scale;
            this.viewTop.style.setProperty("position", "fixed");
            this.viewTop.style.setProperty("top", "0");
            this.viewTop.style.setProperty("left", "50%");
            this.viewTop.style.setProperty("background-color", this.elementController.colors.medium);
            this.viewTop.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.viewTop.style.setProperty("transform", "translate(-50%, 0)");
            this.viewTop.style.borderWidth = "3px";
            this.viewTop.style.borderStyle = "solid";
            this.viewTop.style.borderColor = this.elementController.colors.dark;

            this.card.style.width = size + "px";
            this.card.style.height = size*0.5625 + "px";
            this.card.style.zoom = scale;
            this.card.style.setProperty("position", "fixed");
            this.card.style.setProperty("top", this.elementController.getSize(this.boxTool.toolTopSize) + "px");
            this.card.style.setProperty("left", "50%");
            this.card.style.setProperty("-webkit-transform", "translate(-50%, 0%)");
            this.card.style.setProperty("transform", "translate(-50%, 0%)");
            this.card.style.setProperty("font-size", "1em");

            this.viewBottom.style.width = size + "px";
            this.viewBottom.style.height = this.elementController.getSize(this.boxTool.toolBottomSize) + "px";
            this.viewBottom.style.zoom = scale;
            this.viewBottom.style.setProperty("position", "fixed");
            this.viewBottom.style.setProperty("top", size*0.5625 + this.elementController.getSize(this.boxTool.toolTopSize) + "px");
            this.viewBottom.style.setProperty("left", "50%");
            this.viewBottom.style.setProperty("background-color", this.elementController.colors.medium);
            this.viewBottom.style.setProperty("-webkit-transform", "translate(-50%, 0)");
            this.viewBottom.style.setProperty("transform", "translate(-50%, 0)");
            this.viewBottom.style.borderWidth = "3px";
            this.viewBottom.style.borderStyle = "solid";
            this.viewBottom.style.borderColor = this.elementController.colors.dark;

            this.toolTop.style.width = "100%";
            this.toolTop.style.height = "100%";
            this.toolBottom.style.width = "100%";
            this.toolBottom.style.height = "100%";

            this.addTools();

            this.active = true;
            this.setViewActive();
        }
        else{
            this.view.appendChild(this.card);

            this.view.style.height = this.elementController.getSize(minSize) + "px";
            this.view.style.width = this.elementController.getSize(minSize) + "px";
            this.view.style.setProperty("position", "fixed");
            this.view.style.setProperty("z-index", "10");
            this.view.style.borderRadius = "10px"; // standard
            this.view.style.MozBorderRadius = "10px"; // Mozilla
            this.view.style.WebkitBorderRadius = "10px"; // WebKit
            this.view.style.borderWidth = "3px";
            this.view.style.borderStyle = "solid";
            this.view.style.borderColor = this.elementController.colors.dark;

            let size = 100;
            this.card.style.width = size + "px";
            this.card.style.height = size + "px";

            let scale = parseInt(this.view.style.width)/size;
            this.card.style.zoom = scale;

            if(this.favorite == 0){
                this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
            } else if(this.favorite == 3){
                this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
            }

            if(this.elementController.orientation == "landscape"){
                if(this.favorite == 1){
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("left", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                }
            } else {
                if(this.favorite == 1){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("top", this.elementController.getSize(this.rowStart) + "%");
                } else if(this.favorite == 2){
                    this.view.style.setProperty("right", this.elementController.getSize(this.colStart) + "%");
                    this.view.style.setProperty("bottom", this.elementController.getSize(this.rowStart) + "%");
                }
            }

            this.card.style.width = "100%";
            this.card.style.height = "100%";

            this.active = false;
            this.setViewCollapsed();
        }
        //console.log(this.id + " view update");
    }

    addTools(){
        for(let x=0; x < 4; x++){
            let row = document.createElement("tr");
            for(let t=0; t < 10; t++){
                let tool = this.boxTool.toolBox[x][t];
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

     getView(){
        this.update();
        return this.view;
     }
}
