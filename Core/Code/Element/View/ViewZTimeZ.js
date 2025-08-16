/* Import */
import ViewZ from "/Core/Code/Element/View/ViewZ.js";
/*  */

/* Manages Time elements */
export default class ViewzTimeZ extends ViewZ {
    /* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "timeZ";

        this.date = document.createElement('p');
        this.time = document.createElement('p');
        this.timeTable = document.createElement('table');

        this.timeTool = elementController.timeSubscribe(this);
    }

    updateTime(){
        this.date.innerHTML = this.timeTool.currentDate;
        this.time.innerHTML = this.timeTool.currentTime;
        this.dayOfWeekText.data = this.timeTool.getDayOfWeek();
        this.dayText.data = this.timeTool.getDay();
        this.hourText.data = this.timeTool.getHours();
        this.minuteText.data = this.timeTool.getMinutes();
        this.secondText.data = this.timeTool.getSeconds();
    }

    setViewActive(){
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");
        this.view.style.setProperty("font-size", "0.8em");

        //Set table//
        this.timeTable.style.width = "95%";
        this.timeTable.style.height = "95%";

        this.timeTable.innerHTML = "";

        let dateRow = document.createElement('tr');

        let year = document.createElement('td');
        this.yearText = document.createTextNode(this.timeTool.getYear());
        year.appendChild(this.yearText);

        let month = document.createElement('td');
        this.monthText = document.createTextNode(this.timeTool.getMonth());
        month.appendChild(this.monthText);

        dateRow.appendChild(year);
        dateRow.appendChild(month);

        let dayRow = document.createElement('tr');

        let dayOfWeek = document.createElement('td');
        this.dayOfWeekText = document.createTextNode(this.timeTool.getDayOfWeek());
        dayOfWeek.appendChild(this.dayOfWeekText);

        let day = document.createElement('td');
        this.dayText = document.createTextNode(this.timeTool.getDay());
        day.appendChild(this.dayText);

        dayRow.appendChild(dayOfWeek);
        dayRow.appendChild(day);

        let timeRow = document.createElement('tr');

        let hour = document.createElement('td');
        this.hourText = document.createTextNode(this.timeTool.getHours());
        hour.appendChild(this.hourText);

        let minute = document.createElement('td');
        this.minuteText = document.createTextNode(this.timeTool.getMinutes());
        minute.appendChild(this.minuteText);

        let second = document.createElement('td');
        this.secondText = document.createTextNode(this.timeTool.getSeconds());
        second.appendChild(this.secondText);

        timeRow.appendChild(hour);
        timeRow.appendChild(minute);
        timeRow.appendChild(second);

        this.timeTable.appendChild(dateRow);
        this.timeTable.appendChild(dayRow);
        this.timeTable.appendChild(timeRow);

        this.card.appendChild(this.timeTable);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.mediumColor);
        this.view.style.setProperty("color", this.elementController.lightColor);
        this.view.style.setProperty("font-size", "0.8em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        this.time.innerHTML = this.timeTool.currentTime;

        this.card.appendChild(this.time);
    }
}
/*  */
