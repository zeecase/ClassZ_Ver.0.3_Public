/* Import */
//Core//
import ControllerZ from '/Core/Code/Controller/ControllerZ.js';
import ControllerZDataZ from '/Core/Code/Controller/ControllerZDataZ.js';
import ControllerZElementZ from '/Core/Code/Controller/ControllerZElementZ.js';
/*  */

let viewController = null;

/* Manage the grid view and window*/
export default class ControllerZViewZ extends ControllerZ{

    constructor(){
        super();
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.minSize = 250;
        this.isMin = false;
        this.showGrid = false;
        this.numCol = 0;
        this.numRow = 0;
        this.gridItemSize = 0;
        this.body = document.body;
        this.grid = document.createElement('div');

        this.setBody();
        this.setGrid();
    }

/* Set properties */
    init(data, element){
        super.init(data, element, this);
        viewController = this;
    }

    update(){
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        if(this.screenWidth <= this.minSize || this.screenHeight <= this.minSize)
            this.isMin = true;
        else
            this.isMin = false;

        this.updateGrid();

        this.getElementController().update();
    }

    updateGrid(){
        if(this.getOrientation() == "landscape"){
            this.numCol = 30;
            this.numRow = 10;
            this.gridItemSize = this.screenHeight/10;
        } else {
            this.numCol = 10;
            this.numRow = 30;
            this.gridItemSize = this.screenWidth/10;
        }
        this.setGridItems();
    }

    getOrientation(){
        //Get screen orientation//
        if(this.screenHeight > this.screenWidth - this.screenWidth*0.1)
            if(this.screenHeight < this.screenWidth + this.screenWidth*0.1 )
                return "square";
            else
                return "portrait";

        return "landscape";
    }

    setBody(){
        this.body.style.setProperty("margin", "0");
        this.body.style.setProperty("padding", "0");
    }

    setGrid(){

        this.grid.style.setProperty("display", "grid");
        this.grid.style.setProperty("position", "fixed");
        this.grid.style.setProperty("top", "0");
        this.grid.style.setProperty("left", "0");

        this.updateGrid();
        this.setElement(this.grid);
    }

    setGridItems(){
        this.grid.innerHTML = "";
        this.grid.style.gridTemplateColumns = 'repeat(' + this.numCol + ', 1fr)';

        for(let x=0;x<this.numCol*this.numRow;x++){
            let gridItem = document.createElement('div');
            gridItem.className = "gridItem";
            gridItem.id = "gridItem" + x;
            gridItem.style.setProperty("width", this.gridItemSize + "px");
            gridItem.style.setProperty("height", this.gridItemSize + "px");
            if(this.showGrid){
                gridItem.style.borderWidth = "1px";
                gridItem.style.borderStyle = "dashed";
                gridItem.style.borderColor = "#00680D";
            }
            this.grid.appendChild(gridItem);
        }
    }

    setElement(element){
        console.log(element);
        document.body.appendChild(element);
        if(!element.active)
            this.setClickListener(element);
    }

    setClickListener(element){
        //let self = this;
        element.addEventListener("click", function setActive(){viewController.getElementController().setActive(this);});
    }

    removeClickListener(element){
        //let self = this;
        element.removeEventListener("click", setActive);
    }

    addFont(font){
        document.fonts.add(font);
    }
}
/* */

/*  */

/* On Load */
window.onresize = function(event) {
    viewController.update();
};
/*  */
