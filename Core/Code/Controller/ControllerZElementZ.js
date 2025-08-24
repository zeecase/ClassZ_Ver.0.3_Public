/* Import */
import ControllerZ from '/Core/Code/Controller/ControllerZ.js';
import ControllerZDataZ from '/Core/Code/Controller/ControllerZDataZ.js';
import ControllerZViewZ from '/Core/Code/Controller/ControllerZViewZ.js';
import BackgroundZ from '/Core/Code/Element/Background/BackgroundZ.js';
import GuideZ from '/Core/Code/Element/Guide/GuideZ.js';
import ToolZ from '/Core/Code/Element/Tool/ToolZ.js';
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
import ElementZ from '/Core/Code/Element/ElementZ.js';
import * as IndexZ from '/Core/Code/Element/IndexZ.js';
/*  */

const fontFolder = "/Core/Asset/Font/";

/* Manage CSS and elements */
export default class ControllerZElementZ extends ControllerZ{

    constructor(){
        super();

        this.colors = {
            light: "#E7E7E7", medium: "#373a38", dark: "#131313",
            red: "#ab595a", orange: "#b38945", yellow: "#b6a243",
            green: "#7e8750", blue: "#3c70a5", purple: "#8348a5",
        };
        this.theme = "orange";
        this.darkMode = false;

        this.active = "timeZ";
        this.timeTool = null;
    }

/* Set properties */
    init(data, view) {

        super.init(data, this, view);

        //Set Font//
        let openDyslexic = new FontFace('OpenDyslexic', 'url("' + fontFolder + 'OpenDyslexic/OpenDyslexic3-Regular.ttf")');
        this.getViewController().addFont(openDyslexic);

        this.backgroundZList = IndexZ.getBackgrounds();
        this.guideZList = IndexZ.getGuides();
        this.toolZList = IndexZ.getTools();
        this.viewZList = IndexZ.getViews();
        this.elementZList = this.toolZList.concat(this.backgroundZList, this.guideZList, this.viewZList);
        this.setElementZ();
    }

    update(){
        for(let x=0; x<this.elementZList.length; x++){
            let element = this.elementZList[x];
            element.update();
        }
    }

    updateTime(){
        this.orientation = this.getViewController().getOrientation();
        this.darkMode = this.timeTool.isNight();
        for(let x=0; x<this.timeTool.subscribers.length;x++){
            this.timeTool.subscribers[x].updateTime();
        }
    }

    setElementZ(){
        for(let x=0; x<this.elementZList.length; x++){
            let element = this.elementZList[x];
            if(element != null){
                element.init(this);
                console.log("adding " + element.id);
                if(element.id == "toolZTimeZ"){
                    this.timeTool = element;
                    element.timeLoop();
                    this.darkMode = element.isNight();
                }
                element.start();
                let view = element.getView();
                if(view != null){
                    if(x<4)
                        view.favorite = x;
                    this.getViewController().setElement(view);
                }
            }
        }
    }

    setActive(element){
        if(this.active != element.id){
            console.log("Set active " + element.id);
            //viewController.removeClickListener(element);
            this.active = element.id;
            this.update();
        }
    }


    getGuide(){
        for(let x=0; x<this.elementZList.length; x++){
            let guide = this.elementZList[x];
            if(guide.id == "FuZ")
                return guide.getView();
        }
    }

    getSize(num){
        let size = num * this.getViewController().gridItemSize;
            return size;
    }

    subscribe(element, toolID){
        for(let x=0; x<this.elementZList.length; x++){
            let tool = this.elementZList[x];
            if(tool.id == toolID){
                tool.addSubscriber(element);
                return tool;
            }
        }
    }
}
/*  */
