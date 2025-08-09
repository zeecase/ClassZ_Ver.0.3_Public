/* Import */
//Core Manager//
import DataManager from '/Core/JS/Manager/DataManager.js';
import ViewManager from '/Core/JS/Manager/ViewManager.js';

//Core Object//
import ActivityZ from '/Core/JS/Object/ActivityZ.js';
import ToolZ from '/Core/JS/Object/ToolZ.js';

//Activity//
import BoardZ from '/Core/JS/Element/Activity/BoardZ.js';
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

        //Set colors//
        this.themeColor = "#FFA500";
        this.lightColor = "#f1f1f1";
        this.darkColor = "#111111";

        //Set body//
        this.body = document.body;
        this.setBody();

        //Set background//
        this.background = document.createElement('div');
        this.backgroundImg = document.createElement("img");
        this.backgroundFilter = document.createElement("div");
        this.setBackground();

        //TODO: Set grid//

        //Set toolZ//
        this.toolZDictionary = {};
        this.settingToolZ = new SettingToolZ(this);
        this.timeToolZ = new TimeToolZ(this);
        this.setToolZ();

        //Set activityZ//
        this.activityZDictionary = {};
        this.boardZ = new BoardZ(this);
        this.routineZ = new RoutineZ(this);
        this.setActivityZ();

        //TODO: Set user//

        //Set settingZ//
        this.setSettingZ();
    }

    update(){
        this.updateOrientation();
    }

    updateOrientation(){
        let gradient = "linear-gradient(";
        if(this.dataManager.getOrientetion() == "landscape")
            gradient+= "9";
        gradient += "0deg, " + this.darkColor + " 50%, " + this.themeColor + " 100%)";
        this.backgroundFilter.style.setProperty("background", gradient);
    }

    //setCSS(){
        //let font = "@font-face { font-family: OpenDyslexic; font-style: normal; font-weight: normal; ";
        //font += "src: url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic-Regular.otf) format('opentype'),";
        //font += "url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic3-Regular.ttf) format('truetype');}";
        //font += "@font-face { font-family: OpenDyslexic; font-weight: bold;";
        //font += "src: url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic-Bold.otf) format('opentype'),";
        //font += "url(/Core/Asset/Font/OpenDyslexic/OpenDyslexic3-Bold.ttf) format('truetype');}";
        //this.style.insertAdjacentHTML('beforeend', font);
    //}

    setBody(){
        this.body.style.setProperty("margin", "0");
        this.body.style.setProperty("padding", "0");
    }

    setBackground(){

        //Set Default//
        this.background.style.setProperty("width", "100vw");
        this.background.style.setProperty("height", "100vh");
        this.background.appendChild(this.backgroundImg);
        this.background.appendChild(this.backgroundFilter);

        this.backgroundImg.src = this.dataManager.getBackgroundURL();
        this.backgroundImg.style.setProperty("position", "fixed");
        this.backgroundImg.style.setProperty("top", "50%");
        this.backgroundImg.style.setProperty("left", "50%");
        this.backgroundImg.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.backgroundImg.style.setProperty("transform", "translate(-50%, -50%)");

        this.backgroundFilter.style.setProperty("position", "fixed");
        this.backgroundFilter.style.setProperty("width", "100%");
        this.backgroundFilter.style.setProperty("height", "100%");
        this.backgroundFilter.style.setProperty("opacity", "75%");
        this.updateOrientation();

        console.log("Background:");
        console.log(this.background);
        this.viewManager.setBackground(this.background);
    }

    setGrid(){

        //console.log(this.grid);
    }

    setToolZ(){
        this.toolZDictionary[this.settingToolZ.id] = this.settingToolZ;
        this.toolZDictionary[this.timeToolZ.id] = this.timeToolZ;
    }

    setActivityZ(){
        this.activityZDictionary[this.boardZ.id] = this.boardZ;
        this.activityZDictionary[this.routineZ.id] = this.routineZ;
    }

    /* Set view theme and manager properties */
    setSettingZ(){
        document.documentElement.style.setProperty('--themeColor', this.settingToolZ.activeTheme);
        this.routineZ.countdownLength = this.settingToolZ.countdownLength;
    }
}
/*  */
