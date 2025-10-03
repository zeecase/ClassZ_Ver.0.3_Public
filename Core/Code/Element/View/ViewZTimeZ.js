/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manages Time elements */
export default class ViewzTimeZ extends ViewZ {
    /* Set properties */
    constructor(id) {
        super(id);
        this.favorite = 0;

        this.date = document.createElement('p');
        this.time = document.createElement('p');
        this.year = document.createElement('div');
        this.month = document.createElement('div');
        this.dayOfWeek = document.createElement('div');
        this.day = document.createElement('div');
        this.hour = document.createElement('div');
        this.minute = document.createElement('div');
        this.second = document.createElement('div');

    }

    start(){
        super.start();
        this.timeTool = this.elementController.subscribe(this, "toolZTimeZ");
    }

    updateTime(){

        if(this.active){
            this.time.innerHTML = this.timeTool.currentTime;
            this.year.innerHTML = this.timeTool.getYear();
            this.month.innerHTML = this.timeTool.getMonth();
            this.dayOfWeek.innerHTML = this.timeTool.getDayOfWeek();
            this.day.innerHTML = this.timeTool.getDay();
            this.minute.innerHTML = this.timeTool.getMinutes();
            this.hour.innerHTML = this.timeTool.getHours();
            this.second.innerHTML = this.timeTool.getSeconds();
        } else {
            let hr = this.timeTool.getHours();
            if(hr > 12)
                hr-=12;
            this.hour.innerHTML = this.timeTool.formatNum(hr);
            this.minute.innerHTML = this.timeTool.formatNum(this.timeTool.getMinutes());
        }
    }

    setViewActive(){
        this.view.style.fontFamily = "OpenDyslexic";
        //this.view.style.setProperty("font-size", "0.6em");
        this.card.style.setProperty("background-color", this.elementController.colors.dark);

        let timeTable = document.createElement('table');
        let row = document.createElement('tr');

        let label = document.createElement('td');
        label.innerHTML = "Year:<br>Month:<br>Weekday:<br>Day:<br>Hours:<br>Minutes:<br>Seconds:";

        let value = document.createElement('td');
        value.appendChild(this.year);
        value.appendChild(this.month);
        value.appendChild(this.dayOfWeek);
        value.appendChild(this.day);
        value.appendChild(this.hour);
        value.appendChild(this.minute);
        value.appendChild(this.second);

        row.appendChild(label);
        row.appendChild(value);
        timeTable.appendChild(row);

        timeTable.style.width = "100%";
        timeTable.style.height = "100%";
        label.style.setProperty("background-color", this.elementController.colors.medium);
        label.style.setProperty("color", this.elementController.colors.light);
        label.style.setProperty("text-align", "right");
        label.style.setProperty("padding-right", "5px");
        label.style.width = "50%";
        value.style.setProperty("color", this.elementController.colors.light);
        value.style.setProperty("padding-left", "5px");

        this.card.appendChild(timeTable);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.colors.medium);
        this.view.style.setProperty("color", this.elementController.colors.light);
        this.view.style.setProperty("font-size", "1.2em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let timeTable = document.createElement('table');
        let tRow = document.createElement('tr');
        let aRow = document.createElement('tr');
        let hr = document.createElement('td');
        let br = document.createElement('td');
        let min = document.createElement('td');
        let ampm = document.createElement('td');
        let sp = document.createElement('td');
        let icon = document.createElement('td');



        hr.appendChild(this.hour);
        min.appendChild(this.minute);
        br.innerHTML = ":";
        ampm.innerHTML = this.timeTool.getAMPM();
        tRow.appendChild(hr);
        tRow.appendChild(br);
        tRow.appendChild(min);
        aRow.appendChild(ampm);
        aRow.appendChild(sp);
        aRow.appendChild(icon);

        timeTable.style.width = "100%";
        timeTable.style.height = "100%";
        hr.style.width = "48%";
        br.style.width = "2%";

        timeTable.appendChild(tRow);
        timeTable.appendChild(aRow);

        this.card.appendChild(timeTable);
    }
}
/*  */
