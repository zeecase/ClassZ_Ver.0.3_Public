/* Import */
import  ObjZ from '/Core/JS/Object/ObjZ.js';
/*  */

/* Manage Tool elements */
export default class ToolZ extends ObjZ{
    constructor(elementManager) {
        super(elementManager);
     }

    setViewCollapsed(colStart, rowStart){
        this.active = false;

        this.colStart = colStart;
        this.rowStart = rowStart;
        this.width = 3;
        this.height = 3;

        let left = (this.colStart * this.elementManager.gridItemSize);
        let top = (this.rowStart * this.elementManager.gridItemSize);
        this.style.setProperty("left", left + "px");
        this.style.setProperty("top", top + "px");
        this.style.setProperty("z-index", "1");

        this.setObject();
    }
}
