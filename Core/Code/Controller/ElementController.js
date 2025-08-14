/* Import */
import DataController from '/Core/Code/Controller/DataController.js';
import ViewController from '/Core/Code/Controller/ViewController.js';
import * as Core from '/Core/Code/Element/ElementZ.js';
import * as User from '/User/Code/Element/ElementZ.js';
/*  */

const fontFolder = "/Core/Asset/Font/";
const backgroundFolder = "/Core/Asset/Image/Background/";
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July",
               "August", "September", "October", "November", "December"];


/* Manage CSS and elements */
export default class ElementController{

    constructor(){
        this.themeColor = "#FFA500";
        this.lightColor = "#f1f1f1";
        this.mediumColor = "#373a38";
        this.darkColor = "#111111";
    }

/* Set properties */
    init(data, view) {

        //Set controller//
        this.dataController = data;
        this.viewController = view;

        //Set Font//
        let openDyslexic = new FontFace('OpenDyslexic', 'url("' + fontFolder + 'OpenDyslexic/OpenDyslexic3-Regular.ttf")');
        this.viewController.addFont(openDyslexic);

        //Create element//
        this.background = new Core.BackgroundZ(this);
        this.viewZList = this.getViewZ();
        this.guide = new Core.GuideZ(this);

        this.timeLoop();

        //Set elements//
        this.viewController.setElement(this.background.getBackground());
        this.setViewZ();

        this.update();
    }

    timeLoop() {
        //Set time data//
        this.date = new Date();
        this.orientation = this.viewController.getOrientation();
        this.darkMode = this.isNight();
        this.active = this.getActive();
        //Repeat in 1 second//
        setTimeout(() => {
            this.timeLoop();
        }, 1000);
    }

    update(){
        this.background.update();
        this.updateViewZ();
    }

    updateViewZ(){
        for(let x=0; x<this.viewZList.length; x++)
            this.viewZList[x].update();
    }

    setViewZ(){
        for(let x=0; x<this.viewZList.length; x++){
            let view = this.viewZList[x];
            this.viewController.setElement(view.getElement(this.active));
        }
    }

    getBackgroundImg(size){
        if(size == "large")
            return backgroundFolder + "Texture_Large.jpg";
        else if(size == "medium")
            return backgroundFolder + "Texture_Medium.jpg";
        else if(size == "small")
            return backgroundFolder + "Texture_Small.jpg";
        else
            return backgroundFolder + "Texture_Full.jpg";
    }

        /* Get date view */
    getDate() {
        //Return date mm/dd/yyyy
        return (
            daysOfWeek[this.date.getDay()] +
            ", " +
            months[this.date.getMonth()] +
            " " +
            this.date.getDate() +
            ", " +
            this.date.getFullYear()
        );
    }

    getTime() {
        //Create time view
        let hr = this.date.getHours();
        let min = this.date.getMinutes();
        let time = "";
        //Add time 00:00 AM/PM
        if (hr > 12) {
            time = String(hr - 12).padStart(2, "0") + ":" + String(min).padStart(2, "0") + " PM";
        } else if (hr == 12) {
            time = String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0") + " PM";
        } else {
            time = String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0") + " AM";
        }

        //Return time view
        return time;
    }

    getViewZ(){
        return [new Core.ViewZCardZ(this), new Core.ViewZRoutineZ(this), new Core.ViewZTimeZ(this)];
    }

    getActive(){
        return "TimeZ";
    }

    isNight() {
        let hr = this.date.getHours();
        if (hr < 6 || hr >= 20)
            return true;
        else
            return false;
    }
}
/*  */

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
