/* Manage View */
export default class Manager {

/* Set properties */
    constructor(id) {
        this.id = id;
        this._view = "";
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.gridColStart = 0;
        this.gridRowStart = 0;
        this._element = null;
    }

/* Update */
    update(view){

        //Set view//
        if(this._view != view) {
            this._view = view;
            this._element.innerHTML = view;
        }
    }

/* Get */
    get view(){
        //Return view//
        return "<div class='element' id='" + this.id + "'>" + this._view + "</div>";
    }

    get element(){
        //Return element//
        return this._element;
    }

/* Set */
    set view(view){
        this._view =  view;
    }

    set element(element){
        this._element =  element;
    }

    /* Set size and start position on grid */
    setGridProperties(w, h, c, r){
        this.gridWidth = w;
        this.gridHeight = h;
        this.gridColStart = c;
        this.gridRowStart = r;
    }
}
/*  */
