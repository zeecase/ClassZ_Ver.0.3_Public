/* Import */
import ToolZ from '/Core/JS/Object/ToolZ.js';
/*  */

/* Manages Time elements */
export default class TimeToolZ extends ToolZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager);

        this.id = "timeToolZ";

        //Create date//
        this.dateObject = null;
        this.date = document.createElement("p");
        this.time = document.createElement("p");
        this.dateText = "";
        this.timeText = "";

        //Set Date//
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.timeLoop();
    }

/* Update */
    /* Update Time view */
    timeLoop() {
        //Set time data//
        this.dateObject = new Date();

        let dateText = this.getDateString(this.dateObject);
        if(this.date && dateText != this.dateText){
            this.dateText = dateText;
            this.date.innerHTML= this.dateText;
        }

        let timeText = this.getTimeString(this.dateObject.getHours(), this.dateObject.getMinutes());
        if(this.time && timeText != this.timeText){
            this.timeText = timeText;
            this.time.innerHTML= this.timeText;
        }

        //Repeat in 1 second//
        setTimeout(()=>{this.timeLoop();}, 1000);
    }

/* Get */

    getElement(){

        if(this.active){
            this.style.setProperty("margin", "3px");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");
            this.style.borderRadius = '10px'; // standard
            this.style.MozBorderRadius = '10px'; // Mozilla
            this.style.WebkitBorderRadius = '10px'; // WebKit
            this.style.borderWidth = "3px";
            this.style.borderStyle = "solid";
            this.style.borderColor = this.elementManager.darkColor;

            this.date.style.setProperty("font-size", "2em");
            this.time.style.setProperty("font-size", "2em");

            this.setViewActive();

            this.object.appendChild(this.date);
            this.object.appendChild(this.time);

        } else {
            this.style.setProperty("background-color", this.elementManager.mediumColor);
            this.style.setProperty("color", this.elementManager.lightColor);
            this.style.setProperty("margin", "3px");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");
            this.style.borderRadius = '10px'; // standard
            this.style.MozBorderRadius = '10px'; // Mozilla
            this.style.WebkitBorderRadius = '10px'; // WebKit
            this.style.borderWidth = "3px";
            this.style.borderStyle = "solid";
            this.style.borderColor = this.elementManager.darkColor;

            let gradient = "linear-gradient(";
            if( this.elementManager.orientation == "landscape")
                gradient+= "-9";
            gradient += "0deg, " + this.elementManager.mediumColor + " 0%, " + this.elementManager.themeColor + " 100%)";
            this.time.style.setProperty("background", gradient);
            this.time.style.setProperty("position", "absolute");
            this.time.style.setProperty("top", "0");
            this.time.style.setProperty("bottom", "0");
            this.time.style.setProperty("width", "100%");
            this.time.style.setProperty("height", "100%");
            this.time.style.setProperty("opacity", "50%");
            this.time.style.setProperty("font-size", "1em");
            this.time.style.setProperty("margin", "0");
            this.time.style.setProperty("margin-bottom", "3px");
            this.time.style.setProperty("padding", "0");
            this.time.style.borderRadius = '10px'; // standard
            this.time.style.MozBorderRadius = '10px'; // Mozilla
            this.time.style.WebkitBorderRadius = '10px'; // WebKit

            this.setViewCollapsed(0,0);

            this.object.appendChild(this.time);

        }

        return this.object;
    }

    /* Get date view */
    getDateString(dateObj){
        //Return date mm/dd/yyyy
        return this.daysOfWeek[this.dateObject.getDay()] + ", " + this.months[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
    }

    /* Get time view */
    getTimeString(hr, min) {

        //Create time view
        let time = "";

        //Add time 00:00 AM/PM
        if(hr > 12) {
            time = String(hr - 12).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " PM";
        } else if(hr == 12) {
            time = String(hr).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " PM";
        } else {
            time = String(hr).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " AM";
        }

        //Return time view
        return time;
    }
}
/*  */

/* Prototype time format*/
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
        return r;
};
/*  */
