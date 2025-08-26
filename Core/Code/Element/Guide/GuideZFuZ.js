/* Import */
import GuideZ from '/Core/Code/Element/Guide/GuideZ.js';
/*  */

export default class GuideZFuZ extends GuideZ{

    constructor(id) {
        super(id);
    }

    getView(){
        let body = "Body/" + this.id + "_" + this.elementController.theme + ".png";
        super.setView(body);

        return this.guide;
    }
}
