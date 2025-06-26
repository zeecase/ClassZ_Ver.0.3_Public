import Manager from '/JS/Manager.js';

export default class ActivityManager extends Manager{
    constructor() {
        super("activity");
    }

    update(){
        super.update("<h1>Activity</h1>");
    }
}
