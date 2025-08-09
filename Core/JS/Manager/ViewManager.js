/* Import */
//Core//
import DataManager from '/Core/JS/Manager/DataManager.js';
import ElementManager from '/Core/JS/Manager/ElementManager.js';
/*  */

/* Manage the grid view */
export default class ViewManager{

/* Set properties */
    init(dataManager, elementManager){

        //Set managers//
        this.dataManager = dataManager;
        this.elementManager = elementManager;

        //Grid defaults//
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.numColumns = -1;
        this.numRows = -1;
        this.gridItemSize = -1;
    }

    /* Update view */
    update(){

        //this.setGrid();
        //console.log(view);

    }

    setCSS(style){
        document.head.appendChild(style);
    }

    setBackground(image){
        document.body.appendChild(image);
    }



    /* Get active grid item */
    getGridItem(event){

        //Get click x,y//
        let x = event.clientX;
        let y = event.clientY;

        //Get offset//
        let left = this.element.offsetLeft - this.gridWidth/2;
        let top = this.element.offsetTop - this.gridHeight/2;

        //Get grid col and row//
        let col = Math.floor((x - left)/(this.gridWidth/this.numColumns));
        let row = Math.floor((y - top)/(this.gridHeight/this.numRows));

        //Return grid item number//
        return row * this.numColumns + col;
    }

    /* Set grid click listener */
    setGridListener(){
        //OnClick set active grid item
        let self = this;
        this.element.addEventListener("click", function(event){self.onClick(event);});
    }

    /* Set active grid item */
    onClick(event){

        //Get number of grid item //
        let gridItem = this.getGridItem(event);

        console.log('Grid-item: ' + gridItem);

        //Set active element//
        this.elementsManager.setActivity(gridItem);
    }

     /* Set element width, height, and starting position */
    setElementOnGrid(element){

        //Get properties//
        let w = element.gridWidth * this.gridItemSize;
        let h = element.gridHeight * this.gridItemSize;
        let c = element.gridColStart * this.gridItemSize;
        let r = element.gridRowStart * this.gridItemSize;

        //Set properties//
        element.style.width = w + 'px';
        element.style.height = h + 'px';
        element.style.left = c + 'px';
        element.style.top = r + 'px';

        //console.log(this.activeElement.element);
    }
}
/*  */
