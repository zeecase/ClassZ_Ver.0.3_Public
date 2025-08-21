/* Import */
import DataController from '/Core/Code/Controller/DataController.js';
import ViewController from '/Core/Code/Controller/ViewController.js';

import ElementZ from '/Core/Code/Element/ElementZ.js';
import ToolZ from '/Core/Code/Element/Tool/ToolZ.js';
import ViewZ from '/Core/Code/Element/View/ViewZ.js';

import * as Core from '/Core/Code/Element/Index.js';
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

        this.active = "timeZ";
        this.timeTool = null;
        this.darkMode = false;
    }

/* Set properties */
    init(data, view) {

        //Set controller//
        dataController = data;
        viewController = view;

        //Set Font//
        let openDyslexic = new FontFace('OpenDyslexic', 'url("' + fontFolder + 'OpenDyslexic/OpenDyslexic3-Regular.ttf")');
        viewController.addFont(openDyslexic);

        this.elementZList = Core.getElements();
        this.setElementZ();

    }

    update(){
        for(let x=0; x<this.elementZList.length; x++){
            let element = this.elementZList[x];
            element.update();
        }
    }

    updateTime(){
        this.orientation = viewController.getOrientation();
        this.darkMode = this.timeTool.isNight();
        for(let x=0; x<this.timeTool.subscribers.length;x++){
            this.timeTool.subscribers[x].updateTime();
        }
    }

    setElementZ(){
        for(let x=0; x<this.elementZList.length; x++){
            let element = this.elementZList[x];
            element.init(this);
            console.log("adding " + element.id);
            if(element.id == "toolZTimeZ"){
                this.timeTool = element;
                element.timeLoop();
                this.darkMode = element.isNight();
            }
            element.start();
            let view = element.getView();
            if(view != null)
                viewController.setElement(view);
        }
    }

    setViewZ(){
        for(let x=0; x<this.viewZList.length; x++){
            let view = this.viewZList[x];
            if(x<4)
                view.favorite = x;
            viewController.setElement(view.getElement());
        }
    }

    setActive(element){
        console.log("Set active " + element.id);
        this.active = element.id;
        this.update();
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
        for(let x=0; x<this.elementZList.length; x++){
            let guide = this.elementZList[x];
            if(guide.id == "guideZ")
                return guide.getView();
        }
    }

    getSize(num){
        let size = num * viewController.gridItemSize;
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
