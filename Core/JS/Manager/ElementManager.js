/* Import */
//Core Manager//
import DataManager from '/Core/JS/Manager/DataManager.js';
import ViewManager from '/Core/JS/Manager/ViewManager.js';

//Core Object//
import ActivityZ from '/Core/JS/Object/ActivityZ.js';
import ToolZ from '/Core/JS/Object/ToolZ.js';

//Activity//
import GoalZ from '/Core/JS/Element/Activity/GoalZ.js';
import MarketZ from '/Core/JS/Element/Activity/MarketZ.js';
import RoutineZ from '/Core/JS/Element/Activity/RoutineZ.js';

//Tool//
import SettingToolZ from '/Core/JS/Element/Tool/SettingToolZ.js';
import TimeToolZ from '/Core/JS/Element/Tool/TimeToolZ.js';
/*  */

/* Manage CSS and elements */
export default class ElementManager{

/* Set properties */
    init(dataManager, viewManager) {

        //Set manager//
        this.dataManager = dataManager;
        this.viewManager = viewManager;

        //Set CSS//
        this.style = document.createElement('style');
        this.setCSS();

        //Set view//
        this.background = document.createElement('background');
        this.grid = document.createElement('gridContainer');
        this.setBackground();
        this.setGrid();

        //Set toolZ//
        this.toolZDictionary = {};
        this.settingToolZ = new SettingToolZ(this);
        this.timeToolZ = new TimeToolZ(this);
        this.setToolZ();

        //Set activityZ//
        this.activityZDictionary = {};
        this.goalZ = new GoalZ(this);
        this.marketZ = new MarketZ(this);
        this.routineZ = new RoutineZ(this);
        this.setActivityZ();

        //TODO: Set user//

        //Set settingZ//
        this.setSettingZ();
    }

/* Set */

    setCSS(){
        this.style.type = 'text/css';

        //Set CSS Variables//
        let root = ':root { --themeColor:#00680D; --lightColor:#f1f1f1; --mediumColor:#818181; --darkColor:#111;}';
        this.style.insertAdjacentHTML('beforeend', root);

        //Set Font//
        let font = "@font-face { font-family: OpenDyslexic; font-style: normal; font-weight: normal; ";
        font += "src: url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic-Regular.otf) format('opentype'),";
        font += "url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic3-Regular.ttf) format('truetype');}";
        font += "@font-face { font-family: OpenDyslexic; font-weight: bold;";
        font += "src: url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic-Bold.otf) format('opentype'),";
        font += "url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic3-Bold.ttf) format('truetype');}";
        this.style.insertAdjacentHTML('beforeend', font);

        //Set body//
        let body = "body { background-color: var(--mediumColor); font-family: OpenDyslexic; margin: 0; padding: 0;}";
        body += "h1 { text-align: center; font-size: large; }";
        body += "p { padding-left: 20px; font-size: medium; }";
        this.style.insertAdjacentHTML('beforeend', body);

        //Set classes//
        let classes = ".grid-container { display: grid; }";
        classes += ".grid-item { border: dashed 1px #00680D; }";
        classes += ".element { position: fixed; }";
        this.style.insertAdjacentHTML('beforeend', classes);

        //Set background//
        let background = "#background{ width: 100vw; height:100vh;}";
        this.style.insertAdjacentHTML('beforeend', background);

        //Set view//
        let view = "#view { position: fixed; top: 50%; left: 50%; ";
        view += "-webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}";
        this.style.insertAdjacentHTML('beforeend', view);

        console.log(this.style);
        document.head.appendChild(this.style);
    }

    setBackground(){


        console.log(this.background);
        document.body.appendChild(this.background);
    }

    setGrid(){


        console.log(this.grid);
        document.body.appendChild(this.grid);
    }

    setToolZ(){
        this.toolZDictionary[this.settingToolZ.id] = this.settingToolZ;
        this.toolZDictionary[this.timeToolZ.id] = this.timeToolZ;
    }

    setActivityZ(){
        this.activityZDictionary[this.goalZ.id] = this.goalZ;
        this.activityZDictionary[this.marketZ.id] = this.MarketZ;
        this.activityZDictionary[this.routineZ.id] = this.routineZ;
    }

    /* Set view theme and manager properties */
    setSettingZ(){
        document.documentElement.style.setProperty('--themeColor', this.settingToolZ.activeTheme);
        this.routineZ.countdownLength = this.settingToolZ.countdownLength;
    }
}
/*  */
