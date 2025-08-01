import Manager from '/JS/Manager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
import ScheduleManager from '/JS/Managers/ScheduleManager.js';
import ActivityManager from '/JS/Managers/ActivityManager.js';
import StoreManager from '/JS/Managers/StoreManager.js';
import SettingsManager from '/JS/Managers/SettingsManager.js';

export default class ContentManager extends Manager{
    constructor(main) {
        super("content");
        this.main = main;
        this.timeManager = new TimeManager();
        this.scheduleManager = new ScheduleManager(this.timeManager);
        this.activityManager = new ActivityManager();
        this.storeManager = new StoreManager();
        this.settingsManager = new SettingsManager();
        this.grid = document.getElementsByClassName("grid-container")[0];
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.active = 3;

        this.setSettings();
        this.setGrid();
        this.update();
    }

    setSettings(){
        document.documentElement.style.setProperty('--themeColor', this.settingsManager.activeTheme);
        this.scheduleManager.countdownLength = this.settingsManager.countdownLength;
    }

    update(){

        if(this.screenWidth != window.innerWidth || this.screenHeight != window.innerHeight)
            this.setGrid();

        super.update(this.getGrid());

        //let content = this.timeManager.content;
        //let menuList = [];
        //let content = this.timeManager.content;
        //if(window.innerWidth >= 768){
        //    if(this.active == 3)
        //        this.active = 2;
        //    menuList = [this.settingsManager,
        //                 this.storeManager,
        //                 this.activityManager];
        //    content += this.getMenu(menuList) + this.scheduleManager.content + menuList[this.active].content;
        //    super.update(content);
        //    this.scheduleManager.update();
        //} else {
        //    menuList = [this.settingsManager,
        //                 this.storeManager,
        //                 this.activityManager,
        //                 this.scheduleManager];
        //    content += this.getMenu(menuList) + menuList[this.active].content;
        //    super.update(content);
        //}
        //this.timeManager.update();
        //menuList[this.active].update();
        //menuList.forEach(this.updateMenuButton, this);
//
        //if(menuList[this.active].id == "settings")
        //    this.setInput();
    }

    setGrid(){
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        if(this.screenWidth > this.screenHeight){ //landscape
            if((this.screenWidth/16) < (this.screenHeight/9)){ //full screen width
                this.grid.style.width = '100vw';
                this.grid.style.height = (this.screenWidth/16)*9 + 'px';
            } else { //full screen height
                this.grid.style.height = '100vh';
                this.grid.style.width = (this.screenHeight/9)*16 + 'px';
            }

            this.grid.style.gridTemplateColumns = 'repeat(32, 1fr)';

        } else { //portrait
            if((this.screenHeight/16) < (this.screenWidth/9)){ //full screen height
                this.grid.style.height = '100vh';
                this.grid.style.width = (this.screenHeight/16)*9 + 'px';
            } else { //full screen width
                this.grid.style.width = '100vw';
                this.grid.style.height = (this.screenWidth/9)*16 + 'px';
            }
            this.grid.style.gridTemplateColumns = 'repeat(18, 1fr)';
        }
    }

    getGrid(){
        let grid = '';
        for(let x=0;x<576;x++)
            grid += '<div class="grid-item" id="gridItem' + x + '"></div>';

        return grid;
    }

    getMenu(menuList){
        let menuTable = "<table id='menuTable'><tr>";
        for(let x = (menuList.length-1); x >= 0; x--){
            let name = menuList[x].id;
            let image = name;
            menuTable += "<td id='" + name + "Tab'><img src='/Images/Menu/" + image + ".png' alt='" + name + "' ";
            if(x != this.active)
                menuTable += "class='inactiveImg'/>";
            else
                menuTable += "class='activeImg'/>";
            menuTable += "</td>";
        }
        menuTable += "</tr></table>";

        return menuTable;
    }

    updateMenuButton(manager, i){
            let button = document.getElementById(manager.id + "Tab");
            button.onclick = () =>{
                this.active = i;
                this.update();
            };
    }

    setInput(){
        let theme = document.getElementById("inputTheme");
        theme.onchange = () =>{
                console.log(theme.value);
                this.settingsManager.activeTheme = theme.value;
                this.update();
            };

        let countdown = document.getElementById("inputCountdown");
        countdown.onchange = () =>{
                console.log(countdown.value);
                this.settingsManager.countdownLength = countdown.value;
                this.update();
            };

        this.setSettings();
    }
}
