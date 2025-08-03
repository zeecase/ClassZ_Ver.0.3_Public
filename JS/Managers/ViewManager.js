/* Import */
import Manager from '/JS/Core/Manager.js';
import ElementsManager from '/JS/Managers/ElementsManager.js';
/*  */

/* Manage the grid view */
export default class ViewManager extends Manager{

/* Set properties */
    constructor() {

        //Set ID//
        super("view");

        //Set defaults//
        this.screenWidth = -1;
        this.screenHeight = -1;
        this.gridWidth = -1;
        this.gridHeight = -1;
        this.numColumns = -1;
        this.numRows = -1;
        this.gridItemSize = -1;
        this.isLandscape = false;

        //Set grid//
        this.element = document.getElementById("view");
        this.setGrid();
        this.setGridListener();

        //Set elements//
        this.elementsManager = new ElementsManager(this);
        this.update();
        this.elementsManager.element = document.getElementById("elements");
        this.elementsManager.activityManager.element = document.getElementById("activity");
        this.elementsManager.update();
        this.update();
    }

/* Update */

    /* Update view */
    update(){

        //Update view size//
        if((this.screenWidth != window.innerWidth) || (this.screenHeight != window.innerHeight)){
            this.setGrid();
            this.elementsManager.update();
        }

        //Add elements to view//
        let view = this.getGrid() + this.elementsManager.view;

        //console.log(view);

        //Update view//
        super.update(view);
    }

/* Get */

    /* Get grid view */
    getGrid(){

        //Create view//
        let grid = '';

        //Add 576(32x18) grid items
        for(let x=0;x<576;x++)
                grid += '<div class="grid-item" id="gridItem' + x + '"></div>';

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

        //Get screen size//
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        //Set Landscape//
        if(this.screenWidth > this.screenHeight){

            this.isLandscape = true;

            //set full width
            if((this.screenWidth/16) < (this.screenHeight/9)){

                this.gridWidth = this.screenWidth;
                this.element.style.width = '100vw';

                this.gridHeight = (this.screenWidth/16)*9;
                this.element.style.height = this.gridHeight + 'px';

            //set full height
            }else{

                this.gridWidth = (this.screenHeight/9)*16;
                this.element.style.width = this.gridWidth + 'px';

                this.gridHeight = this.screenHeight;
                this.element.style.height = '100vh';
            }

            //set num columns and rows
            this.numColumns = 32;
            this.numRows = 18;

        //Set portrait//
        }else{

            this.isLandscape = false;

            //set full height
            if((this.screenHeight/16) < (this.screenWidth/9)){

                this.gridWidth = (this.screenHeight/16)*9;
                this.element.style.width = this.gridWidth + 'px';

                this.gridHeight = this.screenHeight;
                this.element.style.height = '100vh';

            //set full width
            }else{

                this.element.style.width = '100vw';
                this.gridWidth = this.screenWidth;

                this.gridHeight = (this.screenWidth/9)*16;
                this.element.style.height = this.gridHeight + 'px';
            }

            //set num columns and rows
            this.numColumns = 18;
            this.numRows = 32;
        }

        this.gridItemSize = this.gridWidth/this.numColumns;

        //Set number of columns//
        this.element.style.gridTemplateColumns = 'repeat(' + this.numColumns + ', 1fr)';

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
}
/*  */
