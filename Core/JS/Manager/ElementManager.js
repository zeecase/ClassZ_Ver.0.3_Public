/* Import */
import DataManager from '/Core/JS/Manager/DataManager.js';
import ViewManager from '/Core/JS/Manager/ViewManager.js';
import * as Core from '/Core/JS/Element/Elements.js';
/*  */

const backgroundFolder = "/Core/Asset/Image/Background/";
const fontFolder = "/Core/Asset/Font/";
const minSize = 320;

/* Manage CSS and elements */
export default class ElementManager{

/* Set properties */
    init(dataManager, viewManager) {

        //Set manager//
        this.dataManager = dataManager;
        this.viewManager = viewManager;

        //Set colors//
        this.themeColor = "#FFA500";
        this.lightColor = "#f1f1f1";
        this.mediumColor = "#373a38";
        this.darkColor = "#111111";

        //Set body//
        this.body = document.body;
        this.setBody();

        //Set background//
        this.orientation = this.dataManager.getOrientetion();
        this.background = document.createElement('div');
        this.backgroundImg = document.createElement("img");
        this.backgroundFilter = document.createElement("div");
        this.setBackground();

        //Set grid//
        this.gridItemSize = 25;
        this.numColumns = 0;
        this.numRows = 0;
        this.showGrid = false;
        this.grid = document.createElement('div');
        this.setGrid();

        //Set Font
        this.OpenDyslexic = new FontFace('OpenDyslexic', 'url("' + fontFolder + 'OpenDyslexic/OpenDyslexic3-Regular.ttf")');
        document.fonts.add(this.OpenDyslexic);

        //Set elements//
        this.active = this.getActive();
        this.timeToolZ = new Core.TimeToolZ(this);
        this.toolZList = this.getToolZ();
        this.setToolZ();
        this.activityZList = this.getActivityZ();
        this.setActivityZ();
    }

    update(){
        this.updateOrientation();
        this.updateGrid();
        this.updateToolZ();
        this.updateActivityZ();
    }

    updateOrientation(){
        this.orientation = this.dataManager.getOrientetion();

        let gradient = "linear-gradient(";
        if( this.orientation == "landscape")
            gradient+= "-9";
        gradient += "0deg, " + this.darkColor + " 50%, " + this.themeColor + " 100%)";
        this.backgroundFilter.style.setProperty("background", gradient);
    }

    updateGrid(){
        if(this.dataManager.screenWidth > minSize && this.dataManager.screenHeight > minSize){
            this.numColumns = Math.floor(this.dataManager.screenWidth/this.gridItemSize)-1;
            this.numRows = Math.floor(this.dataManager.screenHeight/this.gridItemSize)-1;
            this.grid.style.gridTemplateColumns = 'repeat(' + this.numColumns + ', 1fr)';
            this.grid.innerHTML = "";
            this.setGridItems();
        }

        console.log("Col:" + this.numColumns + " Row:" + this.numRows);
    }

    updateToolZ(){
        for(let x=0; x<this.toolZList.length; x++)
            this.toolZList[x].update();
    }

    updateActivityZ(){
        for(let x=0; x<this.activityZList.length; x++)
            this.activityZList[x].update();
    }

    getBackgroundTexture(size){
        if(size == "large")
            return backgroundFolder + "Texture_Large.jpg";
        else if(size == "medium")
            return backgroundFolder + "Texture_Medium.jpg";
        else if(size == "small")
            return backgroundFolder + "Texture_Small.jpg";
        else
            return backgroundFolder + "Texture_Full.jpg";
    }

    getActive(){
        return "timeToolZ";
    }

    getToolZ(){
        return [this.timeToolZ];
    }

    getActivityZ(){
        return [new Core.BoardZ(this), new Core.RoutineZ(this)];
    }

    setBody(){
        this.body.style.setProperty("margin", "0");
        this.body.style.setProperty("padding", "0");
    }

    setBackground(){

        //Set Default//
        this.background.style.setProperty("width", "100vw");
        this.background.style.setProperty("height", "100vh");
        this.background.appendChild(this.backgroundImg);
        this.background.appendChild(this.backgroundFilter);

        this.backgroundImg.src = this.getBackgroundTexture();
        this.backgroundImg.style.setProperty("position", "fixed");
        this.backgroundImg.style.setProperty("top", "50%");
        this.backgroundImg.style.setProperty("left", "50%");
        this.backgroundImg.style.setProperty("-webkit-transform", "translate(-50%, -50%)");
        this.backgroundImg.style.setProperty("transform", "translate(-50%, -50%)");

        this.backgroundFilter.style.setProperty("position", "fixed");
        this.backgroundFilter.style.setProperty("width", "100%");
        this.backgroundFilter.style.setProperty("height", "100%");
        this.backgroundFilter.style.setProperty("opacity", "75%");
        this.updateOrientation();

        this.viewManager.setElement(this.background);
    }

    setGrid(){

        this.grid.style.setProperty("display", "grid");
        this.grid.style.setProperty("position", "fixed");
        this.grid.style.setProperty("top", "0");
        this.grid.style.setProperty("left", "0");

        this.updateGrid();
        this.viewManager.setElement(this.grid);
    }

    setGridItems(){
        for(let x=0;x<this.numColumns*this.numRows;x++){
            let gridItem = document.createElement('div');
            gridItem.className = "gridItem";
            gridItem.id = "gridItem" + x;
            gridItem.style.setProperty("width", this.gridItemSize + "px");
            gridItem.style.setProperty("height", this.gridItemSize + "px");
            if(this.showGrid){
                gridItem.style.borderWidth = "1px";
                gridItem.style.borderStyle = "dashed";
                gridItem.style.borderColor = "#00680D";
            }
            this.grid.appendChild(gridItem);
        }
    }

    setToolZ(){
        for(let x=0; x<this.toolZList.length; x++){
            let element = this.toolZList[x];
            if(x < 2)
                element.favorite = x;

            if(element.id == this.active)
                element.active = true;
            else
                element.active = false;

            this.viewManager.setElement(element.getElement());
        }
    }

    setActivityZ(){
        for(let x=0; x<this.activityZList.length; x++){
            let element = this.activityZList[x];
            if(x < 2)
                element.favorite = x;

            if(element.id == this.active)
                element.active = true;
            else
                element.active = false;

            this.viewManager.setElement(element.getElement());
        }
    }
}
/*  */
