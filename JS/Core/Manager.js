/* Manage View */
export default class Manager {

/* Set properties */
    constructor(id) {
        this.id = id;
        this._content = "";
    }

/* Update */
    update(content){

        //Set content//
        if(this._content != content) {
            this._content = content;
            document.getElementById(this.id).innerHTML = content;
        }
    }

/* Get */
    get content(){
        //Return view//
        return "<div id='" + this.id + "'>" + this._content + "</div>";
    }
}
/*  */
