/* Import */
import  ObjZ from '/Core/JS/Object/ObjZ.js';
/*  */

/* Manage Activity elements */
export default class ActivityZ extends ObjZ{
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
            let right = (this.colStart * this.elementManager.gridItemSize);
            let top = (this.rowStart * this.elementManager.gridItemSize);
            this.style.setProperty("right", right + "px");
            this.style.setProperty("top", top + "px");
         } else if(this.favorite == 1){
            let right = (this.colStart * this.elementManager.gridItemSize);
            let bottom = (this.rowStart * this.elementManager.gridItemSize);
            this.style.setProperty("right", right + "px");
            this.style.setProperty("bottom", bottom + "px");
         }
      } else {
         if(this.favorite == 0){
            let left = (this.colStart * this.elementManager.gridItemSize);
            let bottom = (this.rowStart * this.elementManager.gridItemSize);
            this.style.setProperty("left", left + "px");
            this.style.setProperty("bottom", bottom + "px");
         } else if(this.favorite == 1){
            let right = (this.colStart * this.elementManager.gridItemSize);
            let bottom = (this.rowStart * this.elementManager.gridItemSize);
            this.style.setProperty("right", right + "px");
            this.style.setProperty("bottom", bottom + "px");
         }
      }

      this.style.setProperty("z-index", "1");

      this.setObject();
    }
}
