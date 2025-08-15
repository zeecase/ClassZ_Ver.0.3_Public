/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July",
               "August", "September", "October", "November", "December"];

/* Manage Goal elements */
export default class ToolZTimeZ extends ToolZ {
    /* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "toolZTimeZ";

        this.currentTime = "";
    }

    init(){
        this.timeLoop();
    }

    timeLoop() {
        //Set time data//
        this.date = new Date();
        if(this.currentTime != this.getTime())
            this.elementController.updateTime();
        //Repeat in 1 second//
        setTimeout(() => {
            this.timeLoop();
        }, 1000);
    }

    getDate() {
        //Return date string//
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

        //Return time string//
        return time;
    }

    isNight() {
        let hr = this.date.getHours();
        if (hr < 6 || hr >= 20)
            return true;
        else
            return false;
    }
}

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
