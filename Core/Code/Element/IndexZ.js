/* Import Core/Code/Element/ */

//Background//
import BackgroundZClassZ from '/Core/Code/Element/Background/BackgroundZClassZ.js';

const backgrounds = [
    new BackgroundZClassZ("backgroundZClassZ")
];

export function getBackgrounds(){
    return backgrounds;
}

//Guide//
import GuideZFuZ from '/Core/Code/Element/Guide/GuideZFuZ.js';

const guides = [
    new GuideZFuZ("FuZ")
];

export function getGuides(){
    return guides;
}

//Tool//
import ToolZTimeZ from '/Core/Code/Element/Tool/ToolZTimeZ.js';
import ToolZStackZ from '/Core/Code/Element/Tool/ToolZStackZ.js';
import ToolZRoutineZ from '/Core/Code/Element/Tool/ToolZRoutineZ.js';
import ToolZGoalZ from '/Core/Code/Element/Tool/ToolZGoalZ.js';
//import ToolZButtonZ from '/Core/Code/Element/Tool/ToolZButtonZ.js';

const tools = [
    new ToolZTimeZ("toolZTimeZ"),
    new ToolZStackZ("toolZStackZ"),
    new ToolZRoutineZ("toolZRoutineZ"),
    new ToolZGoalZ("toolZGoalZ")
    //new ToolZButtonZ("toolZButtonZ")
];

export function getTools(){
    return tools;
}

//View//
import ViewZTimeZ from '/Core/Code/Element/View/ViewZTimeZ.js';
//import ViewZStackZ from '/Core/Code/Element/View/ViewZStackZ.js';
import ViewZRoutineZ from '/Core/Code/Element/View/ViewZRoutineZ.js';
import ViewZGoalZ from '/Core/Code/Element/View/ViewZGoalZ.js';

const views = [
    new ViewZTimeZ("timeZ"),
    //new ViewZStackZ("stackZ"),
    new ViewZRoutineZ("routineZ"),
    new ViewZGoalZ("goalZ")
];

export function getViews(){
    return views;
}

