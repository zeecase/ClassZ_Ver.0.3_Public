/* Core Element */

//Background//
import BackgroundZ from '/Core/Code/Element/Background/BackgroundZ.js';

//Guide//
import GuideZ from '/Core/Code/Element/Guide/GuideZ.js';

//Tool//
//import ToolZ from '/Core/Code/Element/Tool/ToolZ.js';
import ToolZButtonZ from '/Core/Code/Element/Tool/ToolZButtonZ.js';
import ToolZTimeZ from '/Core/Code/Element/Tool/ToolZTimeZ.js';

//View//
//import ViewZ from '/Core/Code/Element/View/ViewZ.js';
import ViewZStackZ from '/Core/Code/Element/View/ViewZStackZ.js';
import ViewZRoutineZ from '/Core/Code/Element/View/ViewZRoutineZ.js';
import ViewZTimeZ from '/Core/Code/Element/View/ViewZTimeZ.js';


const elements = [new ToolZTimeZ(), new BackgroundZ(), new GuideZ(), new ToolZButtonZ(), new ViewZStackZ(), new ViewZRoutineZ(), new ViewZTimeZ()];

export function getElements(){
    return elements;
}
