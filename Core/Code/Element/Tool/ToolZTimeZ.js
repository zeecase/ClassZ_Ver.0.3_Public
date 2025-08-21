/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July",
               "August", "September", "October", "November", "December"];

/* Manage Goal elements */
export default class ToolZTimeZ extends ToolZ {
    /* Set properties */
    constructor(id) {
        super(id);

        this.currentDate = "";
        this.currentTime = "";
        this.date = new Date();
    }

    start(){
        super.start();
        //this.timeLoop();
    }

    timeLoop() {
        //Set time data//
        this.date = new Date();
        if(this.currentTime != this.getTime()){
            this.currentDate = this.getDate();
            this.currentTime = this.getTime();
        }
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

        if(hr>12)
            hr -= 12;

        time = String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0");
        time += " " + this.getAMPM();

        //Return time string//
        return time;
    }

    getAMPM(){
        if (this.date.getHours() >= 12)
            return "PM";
        else
            return "AM";
    }

    getYear(){
        return this.date.getFullYear();
    }

    getMonth(){
        return months[this.date.getMonth()];
    }

    getDayOfWeek(){
        return daysOfWeek[this.date.getDay()];
    }

    getDay(){
        return this.date.getDate();
    }

    getHours(){
        return this.date.getHours();
    }

    getMinutes(){
        return this.date.getMinutes();
    }

    getSeconds(){
        return this.date.getSeconds();
    }

    isNight() {
        let hr = this.date.getHours();
        if (hr < 6 || hr >= 20)
            return true;
        else
            return false;
    }

    formatTime(hr, min){
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

    formatNum(val){
        //let num = "";
        //if (val > 12)
        //    num = String(val - 12).padStart(2, "0");
        //else
        //    num = String(val).padStart(2, "0");

        return String(val).padStart(2, "0");
    }

}

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
