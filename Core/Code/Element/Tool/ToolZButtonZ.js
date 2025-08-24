/* Import */
import ToolZ from "/Core/Code/Element/Tool/ToolZ.js";
/*  */

/* Manage Goal elements */
export default class ToolZButtonZ extends ToolZ {
    /* Set properties */
    constructor(id) {
        super(id);

        this.buttons = {};
        this.buttons.add = function(){self.subscribers[0].add();};
        this.buttons.delete = function(){self.subscribers[0].delete();};
        this.buttons.left = function(){self.subscribers[0].left();};
        this.buttons.right = function(){self.subscribers[0].right();};
        this.buttons.up = function(){self.subscribers[0].up();};
        this.buttons.down = function(){self.subscribers[0].down();};

        console.log(this.buttons);
    }

    getButton(type){
        let button = document.createElement('div');

        button.style.width = "50px";
        button.style.height = "50px";
        button.style.setProperty("text-align", "center");

        button.innerHTML = type;
        button.addEventListener("click", this.buttons[type]);

        return button;
    }

}
