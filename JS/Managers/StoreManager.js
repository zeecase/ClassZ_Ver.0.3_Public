import Manager from '/JS/Manager.js';

export default class StoreManager extends Manager{
    constructor() {
        super("store");
    }

    update(){
        super.update("<h1>Store</h1>");
    }
}
