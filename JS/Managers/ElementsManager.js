/* Import */
import Manager from '/JS/Core/Manager.js';
import ViewManager from '/JS/Managers/ViewManager.js';
import ActivityManager from '/JS/Managers/ActivityManager.js';
import GoalManager from '/JS/Managers/GoalManager.js';
import MarketManager from '/JS/Managers/MarketManager.js';
import RoutineManager from '/JS/Managers/RoutineManager.js';
import SettingsManager from '/JS/Managers/SettingsManager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
/*  */

/* Manage Activity elements */
export default class ElementsManager extends Manager{

/* Set properties */
    constructor(view) {

        //Set ID//
        super("elements");

        //Set managers//
        this.viewManager = view;
        this.settingsManager = new SettingsManager();
        this.timeManager = new TimeManager();
        this.activityManager = new ActivityManager();
        this.goalManager = new GoalManager();
        this.marketManager = new MarketManager();
        this.routineManager = new RoutineManager(this.timeManager);

        //Set defaults//
        this.activeGridItem = -1;
        this.activeElement = this.routineManager;
        this.displayDictionary = {};
        this.activityDictionary = {};
        this.activityManager.view = this.activeElement.view;
        this.view = this.activityManager.view;

        //Set settings//
        this.setSettings();

        //Set element dictionaries//
        this.setDictionaries();
    }

/* Update */
    /* Update elements view */
    update(){

        //Set activity//
        this.setActivity();
        this.activeElement.update();

        //Set View//
        let view = this.activityManager.view;

        //Update view//
        super.update(view);
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
