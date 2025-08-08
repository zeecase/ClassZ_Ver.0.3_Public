/* Import */
import ToolZ from '/JS/Core/Object/ToolZ.js';
/*  */

/* Manages Time elements */
export default class TimeToolZ extends ToolZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager, "timeToolZ");

        //Set Date//
        this.dateObject = new Date();
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    }

/* Update */
    /* Update Time view */
    update() {

        //Create date//
        this.dateObject = new Date();

        //Add date elements//
        let date = this.daysOfWeek[this.dateObject.getDay()] + ", ";
        date += this.months[this.dateObject.getMonth()] + " ";
        date += String(this.dateObject.getDate()).padStart(2, '0') + ", ";
        date += this.dateObject.getFullYear();

        //Create time and view//
        let time = this.getTimeString(this.dateObject.getHours(), this.dateObject.getMinutes());
        let view = "<p id='timeObj'>" + time + "</p>";

        //Update view//
        super.update(view);

        //Update subscribers//
        for (let x=0;x<this.subscribeList.length;x++)
            this.subscribeList[x].update();

        //Repeat in 1 second//
        setTimeout(()=>{this.update();}, 1000);
    }

/* Get */

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
