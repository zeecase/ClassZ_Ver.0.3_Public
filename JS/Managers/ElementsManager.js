/* Import */
import Manager from '/JS/Core/Manager.js';
import ContentManager from '/JS/Managers/ContentManager.js';
import GoalManager from '/JS/Managers/GoalManager.js';
import MarketManager from '/JS/Managers/MarketManager.js';
import RoutineManager from '/JS/Managers/RoutineManager.js';
import SettingsManager from '/JS/Managers/SettingsManager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
/*  */

/* Manage Activity elements */
export default class ElementsManager extends Manager{

/* Set properties */
    constructor(content) {

        //Set ID//
        super("elements");

        //Set managers//
        this.contentManager = content;
        this.settingsManager = new SettingsManager();
        this.timeManager = new TimeManager();
        this.goalManager = new GoalManager();
        this.marketManager = new MarketManager();
        this.routineManager = new RoutineManager(this.timeManager);

        //Set defaults//
        this.activeGridItem = -1;
        this.activeElement = this.routineManager;
        this.displayDictionary = {};
        this.activityDictionary = {};

        //Set settings//
        this.setSettings();

        //Set element dictionaries//
        this.setDictionaries();
    }

/* Update */
    /* Update elements view */
    update(){
        //Update view//
        super.update("<h1>Elements</h1>");
    }

/* Get */
    /* Get active element */
    getActiveElement(gridItem){

        //Set active gridItem
        this.activeGridItem = gridItem;

        //TODO: check which element contains gridItem//
        //TODO: update activeElement//

        //Return active element//
        return this.activeElement;
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
}
/*  */
