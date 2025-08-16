/* Import */
import DataController from '/Core/Code/Controller/DataController.js';
import ViewController from '/Core/Code/Controller/ViewController.js';
import * as Core from '/Core/Code/Element/ElementZ.js';
import * as User from '/User/Code/Element/ElementZ.js';
/*  */

const fontFolder = "/Core/Asset/Font/";
const backgroundFolder = "/Core/Asset/Image/Background/";

let dataController = null;
let viewController = null;

/* Manage CSS and elements */
export default class ElementController{

    constructor(){
        this.themeColor = "#FFA500";
        this.lightColor = "#f1f1f1";
        this.mediumColor = "#373a38";
        this.darkColor = "#111111";
    }

/* Set properties */
    init(data, view) {

        //Set controller//
        dataController = data;
        viewController = view;

        //Set Font//
        let openDyslexic = new FontFace('OpenDyslexic', 'url("' + fontFolder + 'OpenDyslexic/OpenDyslexic3-Regular.ttf")');
        viewController.addFont(openDyslexic);

        this.toolZList = this.getToolZ();
        this.timeTool = this.toolZList[0];
        this.timeTool.init();

        //Create element//
        this.background = new Core.BackgroundZ(this);
        this.guide = new Core.GuideZ(this);
        this.viewZList = this.getViewZ();

        //Set elements//
        viewController.setElement(this.background.getBackground());
        this.setViewZ();
    }

    update(){
        this.background.update();
        this.updateViewZ();
    }

    updateTime(){
        this.orientation = viewController.getOrientation();
        this.darkMode = this.timeTool.isNight();
        this.active = this.getActive();
        for(let x=0; x<this.timeTool.subscribers.length;x++){
            this.timeTool.subscribers[x].updateTime();
        }
    }

    updateViewZ(){
        for(let x=0; x<this.viewZList.length; x++)
            this.viewZList[x].updateView();
    }

    setViewZ(){
        for(let x=0; x<this.viewZList.length; x++){
            let view = this.viewZList[x];
            if(x<4)
                view.favorite = x;
            viewController.setElement(view.getElement());
        }
    }

    getBackgroundImg(size){
        if(size == "large")
            return backgroundFolder + "Texture_Large.jpg";
        else if(size == "medium")
            return backgroundFolder + "Texture_Medium.jpg";
        else if(size == "small")
            return backgroundFolder + "Texture_Small.jpg";
        else
            return backgroundFolder + "Texture_Full.jpg";
    }

    getGuide(){
        return this.guide.getGuide();
    }

    getRoutine() {
        //Return routine list//
        return [
            {time: "2024-11-14T15:30:00.000Z", activity: "Morning Routine"},
            {time: "2024-11-14T20:00:00.000Z", activity: "Lunch"},
            {time: "2024-11-15T06:00:00.000Z", activity: "End of Day"}
        ];
    }

    getToolZ(){
        return [new Core.ToolZTimeZ(this)];
    }

    getViewZ(){
        return [new Core.ViewZCardZ(this), new Core.ViewZRoutineZ(this), new Core.ViewZTimeZ(this)];
    }

    getSize(num){
        let size = num * viewController.gridItemSize;
            return size;
    }

    getActive(){
        return "timeZ";
    }

    timeSubscribe(element){
        this.timeTool.addSubscriber(element);
        return this.timeTool;
    }
}
/*  */
