/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor(id) {
        super(id);
        this.favorite = 1;
        this.present = -1;

        this.routineTable = document.createElement('table');
    }

    start(){
        super.start();
        this.timeTool = this.elementController.subscribe(this, "toolZTimeZ");
        this.buttonTool = this.elementController.subscribe(this, "toolZButtonZ");
        this.routine = this.getRoutine();
        this.downButton = this.buttonTool.getButton("down");
        this.upButton = this.buttonTool.getButton("up");
        this.addButton = this.buttonTool.getButton("add");
        this.deleteButton = this.buttonTool.getButton("delete");
    }

    updateTime(){

    }

    up(){
        console.log("Up");
        for(let x=0; x < this.routine.length; x++){
            if(this.routineTable.rows[x].style.display != "none" && (x-1) >= 0){
                this.routineTable.rows[x-1].style.display = "";
                if(x+2 <= this.routine.length-1)
                    this.routineTable.rows[x+2].style.display = "none";
                if(x-1 == 0)
                    this.upButton.style.opacity = "25%";
                this.downButton.style.opacity = "";
                break;
            }
        }
    }

    down(){
        console.log("Down");
        for(let x=0; x < this.routine.length; x++){
            if(this.routineTable.rows[x].style.display != "none" && (x+3) < this.routine.length){
                this.routineTable.rows[x].style.display = "none";
                this.routineTable.rows[x+3].style.display = "";
                if(x+3 == this.routine.length-1)
                    this.downButton.style.opacity = "25%";
                this.upButton.style.opacity = "";
                break;
            }
        }
    }

    add(){
        console.log("Add");
    }

    delete(){
        console.log("Delete");
    }

    setViewActive(){
        this.routineTable.innerHTML = "";
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");
        //this.view.style.setProperty("font-size", "1em");
        this.card.style.setProperty("background-color", this.elementController.colors.dark);

        this.routineTable.style.width = "100%";
        this.routineTable.style.height = "100%";

        //Loop backwards and find get first past time
        for(let x = (this.routine.length-1); x >= 0; x--){
            if(this.routine[x] != null){
                let t = this.routine[x].time;
                let curHr = this.timeTool.getHours();
                let curMin = this.timeTool.getMinutes();

                if((t.hours == curHr && t.minutes < curMin)||(t.hours < curHr)){
                    this.present = x;
                    break;
                }
            }
        }

        for(let x=0; x < this.routine.length; x++){
            let row = document.createElement('tr');
            let time = document.createElement('td');
            let activity = document.createElement('td');
            let t = this.routine[x].time;

            if(x == this.present){
                time.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                activity.innerHTML = this.routine[x].activity;

                row.appendChild(time);
                row.appendChild(activity);

                this.setPresent(row);
            } else if(x < this.present){
                time.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                activity.innerHTML = this.routine[x].activity;

                row.appendChild(time);
                row.appendChild(activity);

                this.setPast(row);
            } else {
                time.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                activity.innerHTML = this.routine[x].activity;

                row.appendChild(time);
                row.appendChild(activity);

                this.setFuture(row);
            }

            if(this.present != -1){
                if(x < this.present-1 || x > this.present+1)
                    row.style.display = "none";
            } else {
                if(x >= 3)
                    row.style.display = "none";
            }

            this.routineTable.appendChild(row);
        }

        //add buttons
        if(this.routine.length < 3){
                //TODO: add to this.routine button
        } else if(this.routine.length > 3){

            this.downButton.style.setProperty("position", "fixed");
            this.downButton.style.setProperty("left", "5px");
            this.downButton.style.setProperty("top", this.elementController.getSize(1)+10 + "px");
            //this.downButton.style.setProperty("transform", "translate(0, -50%)");

            this.upButton.style.setProperty("position", "fixed");
            this.upButton.style.setProperty("left", "5px");
            this.upButton.style.setProperty("top", "5px");
            //this.upButton.style.setProperty("transform", "translate(0, -50%)");

            this.addButton.style.setProperty("position", "fixed");
            this.addButton.style.setProperty("left", this.elementController.getSize(1)+10 + "px");
            this.addButton.style.setProperty("bottom", "5px");
            //this.addButton.style.setProperty("transform", "translate(0, -50%)");
            this.addButton.style.opacity = "25%";

            this.deleteButton.style.setProperty("position", "fixed");
            this.deleteButton.style.setProperty("left", "5px");
            this.deleteButton.style.setProperty("bottom", "5px");
            //this.deleteButton.style.setProperty("transform", "translate(0, -50%)");
            this.deleteButton.style.opacity = "25%";

            this.viewBottom.appendChild(this.downButton);
            this.viewBottom.appendChild(this.upButton);
            this.viewBottom.appendChild(this.addButton);
            this.viewBottom.appendChild(this.deleteButton);

            if(this.present+2 < this.routine.length)
                this.downButton.style.display = "";
            if(this.present > 1)
                this.upButton.style.display = "";
        }

        this.card.appendChild(this.routineTable);

        console.log("Center: " + this.center);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.colors.medium);
        this.view.style.setProperty("color", this.elementController.colors.light);
        this.view.style.setProperty("font-size", "0.8em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let title = document.createElement('p');
        title.innerHTML = "RoutineZ";

        this.card.appendChild(title);
    }

    setPast(row){
        let time = row.cells[0];
        let activity = row.cells[1];

        time.style.setProperty("background-color", this.elementController.colors.dark);
        time.style.setProperty("color", this.elementController.colors.medium);
        time.style.width = "50%";
        time.style.border = "0";

        activity.style.setProperty("background-color", this.elementController.colors.medium);
        activity.style.setProperty("color", this.elementController.colors.dark);
    }

    setPresent(row){
        let time = row.cells[0];
        let activity = row.cells[1];

        time.style.setProperty("background-color", this.elementController.colors.dark);
        time.style.setProperty("color", this.elementController.colors[this.elementController.theme]);
        time.style.width = "50%";
        time.style.borderWidth = "1px";
        time.style.borderStyle = "solid";
        time.style.borderColor = this.elementController.colors[this.elementController.theme];

        activity.style.setProperty("background-color", this.elementController.colors[this.elementController.theme]);
        activity.style.setProperty("color", this.elementController.colors.dark);
    }

    setFuture(row){
        let time = row.cells[0];
        let activity = row.cells[1];

        time.style.setProperty("background-color", this.elementController.colors.dark);
        time.style.setProperty("color", this.elementController.colors.light);
        time.style.width = "50%";
        time.style.border = "0";

        activity.style.setProperty("background-color", this.elementController.colors.light);
        activity.style.setProperty("color", this.elementController.colors.dark);
    }

    getRoutine() {

        //TODO: Return this.routine list - sorted past->future//
        let routine = [];
        let dow = this.timeTool.getDayOfWeek();

        if(dow == "Sunday" ){
            routine = [
                {time: {hours: 10, minutes:0}, activity: "Morning Routine"},
                {time: {hours: 11, minutes:0}, activity: "Brunch"},
                {time: {hours: 12, minutes:0}, activity: "Activity"},
                {time: {hours: 16, minutes:0}, activity: "Relax"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 23, minutes:0}, activity: "Night Routine"},
                {time: {hours: 0, minutes:0}, activity: "Sleep"}
            ];
        } else if(dow == "Monday"){
            routine = [
                {time: {hours: 6, minutes:30}, activity: "Morning Routine"},
                {time: {hours: 7, minutes:0}, activity: "Breakfast"},
                {time: {hours: 8, minutes:0}, activity: "Work Morning"},
                {time: {hours: 8, minutes:30}, activity: "Room 34"},
                {time: {hours: 9, minutes:18}, activity: "Room 52"},
                {time: {hours: 10, minutes:0}, activity: "Brunch"},
                {time: {hours: 10, minutes:19}, activity: "Room 17"},
                {time: {hours: 11, minutes:7}, activity: "Room 83"},
                {time: {hours: 11, minutes:43}, activity: "Room 43"},
                {time: {hours: 12, minutes:25}, activity: "Lunch"},
                {time: {hours: 13, minutes:2}, activity: "Room 35"},
                {time: {hours: 13, minutes:50}, activity: "Room 35"},
                {time: {hours: 14, minutes:38}, activity: "Room 52"},
                {time: {hours: 15, minutes:20}, activity: "Work Afternoon"},
                {time: {hours: 15, minutes:30}, activity: "Afternoon Routine"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 22, minutes:0}, activity: "Night Routine"},
                {time: {hours: 23, minutes:0}, activity: "Sleep"}
            ];
        } else if(dow == "Tuesday"){
            routine = [
                {time: {hours: 6, minutes:30}, activity: "Morning Routine"},
                {time: {hours: 7, minutes:0}, activity: "Breakfast"},
                {time: {hours: 8, minutes:0}, activity: "Work Morning"},
                {time: {hours: 8, minutes:30}, activity: "Room 34"},
                {time: {hours: 10, minutes:9}, activity: "Brunch"},
                {time: {hours: 10, minutes:22}, activity: "Room 17"},
                {time: {hours: 12, minutes:7}, activity: "Lunch"},
                {time: {hours: 12, minutes:44}, activity: "Room 35"},
                {time: {hours: 14, minutes:29}, activity: "Room 52"},
                {time: {hours: 15, minutes:20}, activity: "Work Afternoon"},
                {time: {hours: 15, minutes:30}, activity: "Afternoon Routine"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 22, minutes:0}, activity: "Night Routine"},
                {time: {hours: 23, minutes:0}, activity: "Sleep"}
            ];

        } else if(dow == "Wednesday"){
            routine = [
                {time: {hours: 6, minutes:30}, activity: "Morning Routine"},
                {time: {hours: 7, minutes:0}, activity: "Breakfast"},
                {time: {hours: 8, minutes:0}, activity: "Morning Patrol"},
                {time: {hours: 8, minutes:30}, activity: "Room 52"},
                {time: {hours: 10, minutes:9}, activity: "Brunch"},
                {time: {hours: 10, minutes:28}, activity: "Room 43"},
                {time: {hours: 12, minutes:7}, activity: "Lunch"},
                {time: {hours: 12, minutes:44}, activity: "Room 35"},
                {time: {hours: 14, minutes:29}, activity: "Room 52"},
                {time: {hours: 15, minutes:20}, activity: "Work Afternoon"},
                {time: {hours: 15, minutes:30}, activity: "Afternoon Routine"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 22, minutes:0}, activity: "Night Routine"},
                {time: {hours: 23, minutes:0}, activity: "Sleep"}
            ];
        } else if(dow == "Thursday"){
            routine = [
                {time: {hours: 6, minutes:30}, activity: "Morning Routine"},
                {time: {hours: 7, minutes:0}, activity: "Breakfast"},
                {time: {hours: 8, minutes:0}, activity: "Work Morning"},
                {time: {hours: 8, minutes:30}, activity: "Room 34"},
                {time: {hours: 10, minutes:9}, activity: "Brunch"},
                {time: {hours: 10, minutes:22}, activity: "Room 17"},
                {time: {hours: 12, minutes:7}, activity: "Lunch"},
                {time: {hours: 12, minutes:44}, activity: "Room 35"},
                {time: {hours: 14, minutes:29}, activity: "Room 52"},
                {time: {hours: 15, minutes:20}, activity: "Work Afternoon"},
                {time: {hours: 15, minutes:30}, activity: "Afternoon Routine"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 22, minutes:0}, activity: "Night Routine"},
                {time: {hours: 23, minutes:0}, activity: "Sleep"}
            ];
        } else if(dow == "Friday"){
           routine = [
                {time: {hours: 6, minutes:30}, activity: "Morning Routine"},
                {time: {hours: 7, minutes:0}, activity: "Breakfast"},
                {time: {hours: 8, minutes:0}, activity: "Morning Patrol"},
                {time: {hours: 8, minutes:30}, activity: "Room 52"},
                {time: {hours: 10, minutes:9}, activity: "Brunch"},
                {time: {hours: 10, minutes:28}, activity: "Room 43"},
                {time: {hours: 12, minutes:7}, activity: "Lunch"},
                {time: {hours: 12, minutes:44}, activity: "Room 35"},
                {time: {hours: 14, minutes:29}, activity: "Room 52"},
                {time: {hours: 15, minutes:20}, activity: "Work Afternoon"},
                {time: {hours: 15, minutes:30}, activity: "Afternoon Routine"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 22, minutes:0}, activity: "Night Routine"},
                {time: {hours: 23, minutes:0}, activity: "Sleep"}
            ];
        } else if(dow == "Saturday"){
            routine = [
                {time: {hours: 10, minutes:0}, activity: "Morning Routine"},
                {time: {hours: 11, minutes:0}, activity: "Brunch"},
                {time: {hours: 13, minutes:0}, activity: "Activity"},
                {time: {hours: 16, minutes:0}, activity: "Relax"},
                {time: {hours: 18, minutes:0}, activity: "Dinner"},
                {time: {hours: 19, minutes:0}, activity: "Relax"},
                {time: {hours: 23, minutes:0}, activity: "Night Routine"},
                //{time: {hours: 0, minutes:0}, activity: "Sleep"}
            ];
        }

        //Default//
        return routine;
    }
}
/*  */
