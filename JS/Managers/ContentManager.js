/* Import */
import Manager from '/JS/Core/Manager.js';
import ActivityManager from '/JS/Managers/ActivityManager.js';
import ElementsManager from '/JS/Managers/ElementsManager.js';
import GoalManager from '/JS/Managers/GoalManager.js';
import MarketManager from '/JS/Managers/MarketManager.js';
import RoutineManager from '/JS/Managers/RoutineManager.js';
import SettingsManager from '/JS/Managers/SettingsManager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
/*  */

/* Manage the grid view and content managers */
export default class ContentManager extends Manager{

/* Set properties */
    constructor() {

        //Set ID//
        super("content");

        //Set defaults//
        this.screenWidth = -1;
        this.screenHeight = -1;
        this.gridWidth = -1;
        this.gridHeight = -1;
        this.numColumns = -1;
        this.numRows = -1;

        //Set grid//
        this.grid = document.getElementById("content");
        this.setGrid();
        this.setGridListener();

        //Set elements//
        this.elementsManager = new ElementsManager(this);

        //Set activity//
        this.activityManager = new ActivityManager();
        this.setActivity(this.elementsManager.activeElement);
    }

/* Update */

    /* Update content view */
    update(){

        //Update view size//
        if((this.screenWidth != window.innerWidth) || (this.screenHeight != window.innerHeight))
            this.setGrid();

        //Update view//
        let view = this.getGrid();
        //TODO: add elements to view
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
        let left = this.grid.offsetLeft - this.gridWidth/2;
        let top = this.grid.offsetTop - this.gridHeight/2;

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

            //set full width
            if((this.screenWidth/16) < (this.screenHeight/9)){

                this.gridWidth = this.screenWidth;
                this.grid.style.width = '100vw';

                this.gridHeight = (this.screenWidth/16)*9;
                this.grid.style.height = this.gridHeight + 'px';

            //set full height
            }else{

                this.gridWidth = (this.screenHeight/9)*16;
                this.grid.style.width = this.gridWidth + 'px';

                this.gridHeight = this.screenHeight;
                this.grid.style.height = '100vh';
            }

            //set num columns and rows
            this.numColumns = 32;
            this.numRows = 18;

        //Set portrait//
        }else{

            //set full height
            if((this.screenHeight/16) < (this.screenWidth/9)){

                this.gridWidth = (this.screenHeight/16)*9;
                this.grid.style.width = this.gridWidth + 'px';

                this.gridHeight = this.screenHeight;
                this.grid.style.height = '100vh';

            //set full width
            }else{

                this.grid.style.width = '100vw';
                this.gridWidth = this.screenWidth;

                this.gridHeight = (this.screenWidth/9)*16;
                this.grid.style.height = this.gridHeight + 'px';
            }

            //set num columns and rows
            this.numColumns = 18;
            this.numRows = 32;
        }

        //Set number of columns//
        this.grid.style.gridTemplateColumns = 'repeat(' + this.numColumns + ', 1fr)';
    }

    /* Set grid click listener */
    setGridListener(){
        //OnClick set active grid item
        let self = this;
        this.grid.addEventListener("click", function(event){self.setElement(event);});
    }

    /* Set active grid item */
    setElement(event){

        //Get number of grid item //
        let gridItem = this.getGridItem(event);

        //Get active Element//
        let activeElement = this.elementsManager.getActiveElement(gridItem);

        //Set active element//
        this.setActivity(activeElement);
    }

    /* Set activity view */
    setActivity(element){

        //Set element view to activity//
        //this.activityManager.update(element.content);

        //Update view//
        this.update();
    }
}
/*  */
