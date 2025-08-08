/* Import */
//Core//
import DataManager from '/JS/Core/Manager/DataManager.js';
import ElementManager from '/JS/Core/Manager/ElementManager.js';
/*  */

/* Manage the grid view */
export default class ViewManager{

/* Set properties */
    init(dataManager, elementManager){

        //Set managers//
        this.dataManager = dataManager;
        this.elementManager = elementManager;

        //Grid defaults//
        this.isLandscape = false;
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.numColumns = -1;
        this.numRows = -1;
        this.gridItemSize = -1;

        //Set grid//
        this.setGrid();
        //this.setGridListener();
    }

/* Update */

    /* Update view */
    update(){

        this.setGrid();
        //console.log(view);

    }

/* Get */

    /* Get grid view */
    getGrid(){

        //Create view//
        let grid = '';

        ////Add 576(32x18) grid items
        //for(let x=0;x<576;x++)
        //        grid += '<div class="grid-item" id="gridItem' + x + '"></div>';

        //Return view//
        return grid;
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

/* Set */

    /* Set grid to 16:9 or 9:16 fullscreen centered */
    setGrid(){
//
//        //Get screen size//
//        this.screenWidth = window.innerWidth;
//        this.screenHeight = window.innerHeight;
//
//        let background = document.getElementById("background");
//
//        //Set Landscape//
//        if(this.screenWidth > this.screenHeight){
//
//            this.isLandscape = true;
//
//            background.style.background = "linear-gradient(90deg, var(--darkColor) 50%, var(--themeColor) 100%)";
//
//            //set full width
//            if((this.screenWidth/16) < (this.screenHeight/9)){
//
//                this.gridWidth = this.screenWidth;
//                this.element.style.width = '100vw';
//
//                this.gridHeight = (this.screenWidth/16)*9;
//                this.element.style.height = this.gridHeight + 'px';
//
//            //set full height
//            }else{
//
//                this.gridWidth = (this.screenHeight/9)*16;
//                this.element.style.width = this.gridWidth + 'px';
//
//                this.gridHeight = this.screenHeight;
//                this.element.style.height = '100vh';
//            }
//
//            //set num columns and rows
//            this.numColumns = 32;
//            this.numRows = 18;
//
//        //Set portrait//
//        }else{
//
//            this.isLandscape = false;
//
//            background.style.background = "linear-gradient(0deg, var(--darkColor) 50%, var(--themeColor) 100%)";
//
//            //set full height
//            if((this.screenHeight/16) < (this.screenWidth/9)){
//
//                this.gridWidth = (this.screenHeight/16)*9;
//                this.element.style.width = this.gridWidth + 'px';
//
//                this.gridHeight = this.screenHeight;
//                this.element.style.height = '100vh';
//
//            //set full width
//            }else{
//
//                this.element.style.width = '100vw';
//                this.gridWidth = this.screenWidth;
//
//                this.gridHeight = (this.screenWidth/9)*16;
//                this.element.style.height = this.gridHeight + 'px';
//            }
//
//            //set num columns and rows
//            this.numColumns = 18;
//            this.numRows = 32;
//        }
//
//        this.gridItemSize = this.gridWidth/this.numColumns;
//
//        //Set number of columns//
//        this.element.style.gridTemplateColumns = 'repeat(' + this.numColumns + ', 1fr)';

        //console.log(this.element);
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
