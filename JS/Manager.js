export default class Manager {
    constructor(id) {
        this.id = id;
        this._content = "";
    }

    get content(){
        return "<div id='" + this.id + "'>" + this._content + "</div>";
    }

    update(content){
        if(this._content != content) {
            this._content = content;
            document.getElementById(this.id).innerHTML = content;
        }
    }
}
