/* Import */
//Core Manager//
import DataManager from '/JS/Core/Manager/DataManager.js';
import ViewManager from '/JS/Core/Manager/ViewManager.js';

//Core Object//
import ActivityZ from '/JS/Core/Object/ActivityZ.js';
import ToolZ from '/JS/Core/Object/ToolZ.js';

//Activity//
import GoalZ from '/JS/Elements/Activity/GoalZ.js';
import MarketZ from '/JS/Elements/Activity/MarketZ.js';
import RoutineZ from '/JS/Elements/Activity/RoutineZ.js';

//Tool//
import SettingsZ from '/JS/Elements/Tool/SettingZ.js';
import TimeZ from '/JS/Elements/Tool/TimeZ.js';
/*  */

/* Manage Activity elements */
export default class ElementManager{

/* Set properties */
    init(dataManager, viewManager) {

        //Set manager//
        this.dataManager = dataManager;
        this.viewManager = viewManager;

        //Set activity//
        this.goalZ = new GoalZ(this);
        this.marketZ = new MarketZ(this);
        this.routineZ = new RoutineZ(this);

        //Set tool//
        this.settingZ = new SettingsZ(this);
        this.timeZ = new TimeZ(this);

        //Set defaults//
        this.displayDictionary = {};
        this.activityDictionary = {};
        this.activityManager.view = this.activeElement.view;
        this.view = this.activityManager.view;

        //Set settings//
        this.setSettings();

        //Set element dictionaries//
        this.setDictionaries();
    }

/* Set */

    /* Set view theme and manager properties */
    setSettings(){
        document.documentElement.style.setProperty('--themeColor', this.settingsManager.activeTheme);
        this.routineManager.countdownLength = this.settingsManager.countdownLength;
    }

    /* Set element dictionaries*/
    setDictionaries(){

        //Set core display elements//
        this.displayDictionary[this.timeManager.id] = this.timeManager;

        //Set core activity elements//
        this.activityDictionary[this.settingsManager.id] = this.settingsManager;
        this.activityDictionary[this.routineManager.id] = this.routineManager;
        this.activityDictionary[this.goalManager.id] = this.goalManager;
        this.activityDictionary[this.marketManager.id] = this.MarketManager;

        //TODO: Set user elements//
    }

    /* Set active element */
    setActiveElement(gridItem){

        //Set active gridItem
        this.activeGridItem = gridItem;

        //TODO: check which element contains gridItem//
        //TODO: update activeElement//
        this.update();
    }

    /* Set activity view */
    setActivity(){

        //Set grid properties//
        if(this.viewManager.isLandscape)
            this.activityManager.setGridProperties(18,18,8,0);
        else
            this.activityManager.setGridProperties(18,18,0,6);

        //Set on grid//
        this.setElementOnGrid(this.activityManager);

        //Set active element size to fullscreen activity//
        this.activeElement.element = document.getElementById(this.activeElement.id);
        this.activeElement.element.style.width = this.activityManager.element.style.width;
        this.activeElement.element.style.height = this.activityManager.element.style.height;
        //console.log(this.activeElement);
    }

    /* Set element width, height, and starting position */
    setElementOnGrid(manager){

        //Get properties//
        let w = manager.gridWidth * this.viewManager.gridItemSize;
        let h = manager.gridHeight * this.viewManager.gridItemSize;
        let c = manager.gridColStart * this.viewManager.gridItemSize;
        let r = manager.gridRowStart * this.viewManager.gridItemSize;

        //Set properties//
        manager.element.style.width = w + 'px';
        manager.element.style.height = h + 'px';
        manager.element.style.left = c + 'px';
        manager.element.style.top = r + 'px';

        //console.log(this.activeElement.element);
    }
}
/*  */
