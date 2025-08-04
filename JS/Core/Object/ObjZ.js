/* Import */
import ElementManager from '/JS/Core/Manager/ElementManager.js';
/*  */

/* ObjZ element */
export default class ObjZ{

    constructor(elementManager, id) {

        //Set element manager//
        this.elementManager = elementManager;

        //Set ID//
        this.id = id;

        //Set defaults//
        this.colStart = 0;
        this.rowStart = 0;
        this.colEnd = 4;
        this.rowEnd = 4;
    }

    setViewProperties(colStart, rowStart, colEnd, rowEnd){
        this.colStart = colStart;
        this.rowStart = rowStart;
        this.colEnd = colEnd;
        this.rowEnd = rowEnd;
    }
}
