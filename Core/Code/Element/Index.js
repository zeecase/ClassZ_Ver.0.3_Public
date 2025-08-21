/* Import Core/Code/Element/ */

//Tool//
import ToolZTimeZ from '/Core/Code/Element/Tool/ToolZTimeZ.js';
import ToolZStackZ from '/Core/Code/Element/Tool/ToolZStackZ.js';
import ToolZRoutineZ from '/Core/Code/Element/Tool/ToolZRoutineZ.js';
import ToolZGoalZ from '/Core/Code/Element/Tool/ToolZGoalZ.js';
import ToolZButtonZ from '/Core/Code/Element/Tool/ToolZButtonZ.js';

//Background//
import BackgroundZ from '/Core/Code/Element/Background/BackgroundZ.js';

//Guide//
import GuideZ from '/Core/Code/Element/Guide/GuideZ.js';

//View//
import ViewZTimeZ from '/Core/Code/Element/View/ViewZTimeZ.js';
import ViewZStackZ from '/Core/Code/Element/View/ViewZStackZ.js';
import ViewZRoutineZ from '/Core/Code/Element/View/ViewZRoutineZ.js';
import ViewZGoalZ from '/Core/Code/Element/View/ViewZGoalZ.js';

const elements = [
    new ToolZTimeZ(),
    new ToolZStackZ(),
    new ToolZRoutineZ(),
    new ToolZGoalZ(),
    new ToolZButtonZ(),
    new BackgroundZ(),
    new GuideZ(),
    new ViewZTimeZ(),
    new ViewZStackZ(),
    new ViewZRoutineZ(),
    new ViewZgoalZ()
];

export function getElements(){
    return elements;
}
