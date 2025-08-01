/* Import */
import Manager from '/JS/Core/Manager.js';
import ActivityManager from '/JS/Managers/ActivityManager.js';
import GoalManager from '/JS/Managers/GoalManager.js';
import RoutineManager from '/JS/Managers/RoutineManager.js';
import SettingsManager from '/JS/Managers/SettingsManager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
/*  */

/* Manage the main view managers */
export default class ContentManager extends Manager{

/* Set properties */
    constructor(main) {

        //Set id//
        super("content");

        //Set Managers//
        this.main = main;
        this.timeManager = new TimeManager();
        this.activityManager = new ActivityManager();
        this.goalManager = new GoalManager();
        this.routineManager = new RoutineManager(this.timeManager);
        this.settingsManager = new SettingsManager();

        //Set grid//
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.grid = document.getElementsByClassName("grid-container")[0];
        this.setGrid();

        //Update view//
        this.setSettings();
        this.update();
    }

/* Update */

    /* Update content view */
    update(){

        //Update view size//
        if((this.screenWidth != window.innerWidth) || (this.screenHeight != window.innerHeight))
            this.setGrid();

        //Update view//
        super.update(this.getGrid());
    }

    /* Update menu listener*/
    updateMenuButton(manager, i){

        //Get button//
        let button = document.getElementById(manager.id + "Tab");

        //Set click listener//
        button.onclick = () =>{
            //update view
            this.update();
        };
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

/* Set */

    /* Set view theme and manager properties */
    setSettings(){
        document.documentElement.style.setProperty('--themeColor', this.settingsManager.activeTheme);
        this.routineManager.countdownLength = this.settingsManager.countdownLength;
    }

    /* Set grid to 16:9 fullscreen centered */
    setGrid(){

        //Get Screen Size//
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        //Set Landscape//
        if(this.screenWidth > this.screenHeight){

            //set full width
            if((this.screenWidth/16) < (this.screenHeight/9)){

                this.grid.style.width = '100vw';
                this.grid.style.height = (this.screenWidth/16)*9 + 'px';

            //set full height
            }else{

                this.grid.style.height = '100vh';
                this.grid.style.width = (this.screenHeight/9)*16 + 'px';
            }

            //set 32 columns
            this.grid.style.gridTemplateColumns = 'repeat(32, 1fr)';

        //Set portrait//
        }else{

            //set full height
            if((this.screenHeight/16) < (this.screenWidth/9)){

                this.grid.style.height = '100vh';
                this.grid.style.width = (this.screenHeight/16)*9 + 'px';

            //set full width
            }else{

                this.grid.style.width = '100vw';
                this.grid.style.height = (this.screenWidth/9)*16 + 'px';
            }

            //set 18 columns
            this.grid.style.gridTemplateColumns = 'repeat(18, 1fr)';
        }
    }
}
/*  */
