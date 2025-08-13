/* Import */
import  BoardZ from '/Core/JS/Object/BoardZ.js';
/*  */

/* Manage Tool elements */
export default class ToolZ extends BoardZ{
    constructor(elementManager) {
        super(elementManager);
        this.favorite = -1;
     }

    setViewCollapsed(colStart, rowStart){
        this.active = false;

        this.colStart = colStart;
        this.rowStart = rowStart;
        this.width = 3;
        this.height = 3;

        if(this.elementManager.orientation == "landscape"){
            if(this.favorite == 0){
                let left = (this.colStart * this.elementManager.gridItemSize);
                let top = (this.rowStart * this.elementManager.gridItemSize);
                this.board.style.setProperty("left", left + "px");
                this.board.style.setProperty("top", top + "px");
                this.board.style.setProperty("right", "auto");
                this.board.style.setProperty("bottom", "auto");
            } else if(this.favorite == 1){
                let left = (this.colStart * this.elementManager.gridItemSize);
                let bottom = (this.rowStart * this.elementManager.gridItemSize);
                this.board.style.setProperty("left", left + "px");
                this.board.style.setProperty("bottom", bottom + "px");
                this.board.style.setProperty("right", "auto");
                this.board.style.setProperty("top", "auto");
            }
        } else {
            if(this.favorite == 0){
                let left = (this.colStart * this.elementManager.gridItemSize);
                let top = (this.rowStart * this.elementManager.gridItemSize);
                this.board.style.setProperty("left", left + "px");
                this.board.style.setProperty("top", top + "px");
                this.board.style.setProperty("right", "auto");
                this.board.style.setProperty("bottom", "auto");
            } else if(this.favorite == 1){
                let right = (this.colStart * this.elementManager.gridItemSize);
                let top = (this.rowStart * this.elementManager.gridItemSize);
                this.board.style.setProperty("right", right + "px");
                this.board.style.setProperty("top", top + "px");
                this.board.style.setProperty("left", "auto");
                this.board.style.setProperty("bottom", "auto");
            }
        }

        this.style.setProperty("z-index", "1");

        this.setBoard();
    }
}
