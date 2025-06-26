import Manager from '/JS/Manager.js';

export default class TimeManager extends Manager{
    constructor() {
        super("time");
        this.dateObject = new Date();
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.subscribeList = [];
    }

    update() {
        this.dateObject = new Date();
        let date = this.daysOfWeek[this.dateObject.getDay()] + ", ";
        date += this.months[this.dateObject.getMonth()] + " ";
        date += String(this.dateObject.getDate()).padStart(2, '0') + ", ";
        date += this.dateObject.getFullYear();
        let time = this.getTimeString(this.dateObject.getHours(), this.dateObject.getMinutes());
        let content = "<p id='date'>" + date + "</p><p id='timeObj'>" + time + "</p>";
        super.update(content);
        for (let x=0;x<this.subscribeList.length;x++)
            this.subscribeList[x].update();
        setTimeout(()=>{this.update();}, 1000);
    }

    getDateSpeech(){
        return "Today is " + this.daysOfWeek[dayOfWeek] + " " + this.months[month] + " " + day + " " + year;
    }

    getTimeSpeech(){
        return this.time;
    }

    getDateString(dateObj){
        return "" + (dateObj.getMonth()+1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
    }

    getTimeString(hr, min) {
        var t = "";
        if(hr > 12) {
            t = String(hr - 12).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " PM";

        } else if(hr == 12) {
            t = String(hr).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " PM";
        } else {
            t = String(hr).padStart(2, '0') +
                ":" + String(min).padStart(2, '0') + " AM";
        }

        return t;
    }

    subscribe(manager){
        if (!this.subscribeList.includes(manager))
            this.subscribeList.push(manager);
    }
}

Number.prototype.pad = function(n) {
            for (var r = this.toString(); r.length < n; r = 0 + r);
                return r;
    };
