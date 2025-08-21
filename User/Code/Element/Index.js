import ToolZClassZ from '/User/Code/Element/Tool/ToolZClassZ.js';
import ToolZMakerZ from '/User/Code/Element/Tool/ToolZMakerZ.js';
import ToolZMarketZ from '/User/Code/Element/Tool/ToolZMarketZ.js';
import ViewZClassZ from '/User/Code/Element/View/ViewZClassZ.js';
import ViewZMakerZ from '/User/Code/Element/View/ViewZMakerZ.js';
import ViewZMarketZ from '/User/Code/Element/View/ViewZMarketZ.js';

const elements = [
    new ToolZClassZ(),
    new ToolZMakerZ(),
    new ToolZMarketZ(),
    new ViewZClassZ(),
    new ViewZMakerZ(),
    new ViewZMarketZ(),
];

export function getElements(){
    return elements;
}
