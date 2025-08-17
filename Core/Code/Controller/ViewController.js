/* Import */
//Core//
import DataController from '/Core/Code/Controller/DataController.js';
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

let dataController = null;
let elementController = null;
let viewController = null;

/* Manage the grid view */
export default class ViewController{

    constructor(){
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
        //Set controller//
        dataController = data;
        elementController = element;
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

        elementController.update();
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
        this.setClickListener(element);
    }

    setClickListener(element){
        //let self = this;
        element.addEventListener("click", function(){elementController.setActive(this);});
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
