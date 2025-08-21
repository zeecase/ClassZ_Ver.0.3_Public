import ToolZClassZ from '/User/Code/Element/Tool/ToolZClassZ.js';
import ToolZMakerZ from '/User/Code/Element/Tool/ToolZMakerZ.js';
import ToolZMarketZ from '/User/Code/Element/Tool/ToolZMarketZ.js';
import ViewZClassZ from '/User/Code/Element/View/ViewZClassZ.js';
import ViewZMakerZ from '/User/Code/Element/View/ViewZMakerZ.js';
import ViewZMarketZ from '/User/Code/Element/View/ViewZMarketZ.js';

const elements = [
    new ToolZClassZ("toolZClassZ"),
    new ToolZMakerZ("toolZMakerZ"),
    new ToolZMarketZ("toolZMarketZ"),
    new ViewZClassZ("classZ"),
    new ViewZMakerZ("makerZ"),
    new ViewZMarketZ("marketZ"),
];

export function getElements(){
    return elements;
}
