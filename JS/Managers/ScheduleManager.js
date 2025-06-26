import Manager from '/JS/Manager.js';
import TimeManager from '/JS/Managers/TimeManager.js';

export default class ScheduleManager extends Manager{

    constructor(time) {
        super("schedule");
        this.time = time;
        this.todaysSchedule = this.getDefaultSchedule();
        this.currentActivity = 0;
        this.countdownLength = 0;
        this.coutdown = 0;
        this.time.subscribe(this);
    }

    update(){
        this.currentActivity = this.findCurrentActivity();
        let schedule = "<h1>Today's Schedule</h1>";
        schedule += "<table class='center' id='scheduleTable'>";
        schedule += "<tr><th>Time&rarr;</th><th id='todo'>To-Do</th></tr>";
        for(let x = 0; x < this.todaysSchedule.length; x++) {
            let d = new Date(this.todaysSchedule[x].time);
            let t = this.time.getTimeString(d.getHours(), d.getMinutes());
            let a = this.todaysSchedule[x].activity;
            schedule += "<tr>";
            if(x < this.currentActivity){
                schedule += "<td class='pastTime'>" + t + "&rarr;</td>";
                schedule += "<td class='pastActivity'><s>" + a + "</s></td>";

            } else if(x == this.currentActivity){
                schedule += "<td><b>" + t + "&rarr;</b>";
                if(this.countdown > 0){
                    schedule += "<div id='countdown'>";
                    if(this.countdown > 60)
                        schedule += Math.ceil(this.countdown/60) + " minutes";
                    else
                        schedule += this.countdown + " seconds";
                    schedule += " &darr;</div>";
                }
                schedule += "</td>";
                schedule += "<td id='currentActivity'><b>" + a;
                schedule += "</b></td>";
            } else if(x > this.currentActivity || this.currentActivity == -1){
                schedule += "<td>" + t + "&rarr;</td>";
                schedule += "<td>" + a + "</td>";
            }
            schedule += "</tr>";
        }
        schedule += "</table>";
        super.update(schedule);
     }

    findCurrentActivity(){
        for(let x = 0; x < this.todaysSchedule.length; x++) {
            let d = new Date(this.todaysSchedule[x].time);
            let currentTime = new Date();
            let activityTime = new Date();
            activityTime.setHours(d.getHours());
            activityTime.setMinutes(d.getMinutes());
            activityTime.setSeconds(0);
            let countdownInSeconds = (activityTime - currentTime)/1000;
            if(countdownInSeconds >= 1 && countdownInSeconds < this.countdownLength*60){
                this.countdown = countdownInSeconds;
                if(countdownInSeconds == 1){
                    this.countdown = 0;
                    //play alarm
                }
            }
            if(activityTime > currentTime)
                return (x - 1);
        }
        return (this.todaysSchedule.length -1);
    }

    getDefaultSchedule() {
        return [
            {time: "2024-11-14T15:30:00.000Z", activity: "Morning Routine"},
            {time: "2024-11-14T20:00:00.000Z", activity: "Lunch"},
            {time: "2024-11-15T06:00:00.000Z", activity: "End of Day"}
        ];
    }
}
