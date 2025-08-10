/* Import */
import ToolZ from '/Core/JS/Object/ToolZ.js';
/*  */

/* Manages Time elements */
export default class TimeToolZ extends ToolZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager, "timeToolZ");

        //Create date//
        this.dateObject = null;
        this.date = "";
        this.time = "";

        //Set Date//
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.update();
    }

/* Update */
    /* Update Time view */
    update() {
        //Set time data//
        this.dateObject = new Date();
        this.date = this.getDateString(this.dateObject);
        this.time = this.getTimeString(this.dateObject.getHours(), this.dateObject.getMinutes());

        //Repeat in 1 second//
        setTimeout(()=>{this.update();}, 1000);
    }

/* Get */

    getTimeElement(){
        let time = document.createElement("p");
        time.innerHTML = this.time;
        this.style.setProperty("background", this.elementManager.mediumColor);
        this.style.setProperty("padding", "0");
        this.style.setProperty("overflow-wrap", "break-word");
        this.style.setProperty("text-align", "center");
        time.style.setProperty("font-size", "24px");
        time.style.setProperty("margin-top", "10%");
        time.style.setProperty("padding", "0");
        this.object.appendChild(time);

        return this.object;
    }

    /* Get date view */
    getDateString(dateObj){
        //Return date mm/dd/yyyy
        return "" + (dateObj.getMonth()+1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
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
