import Manager from '/JS/Manager.js';

export default class SettingsManager extends Manager{

    constructor() {
        super("settings");
        this.themeColors = ["#A04040", "#FFA500","#E3D12F", "#00680D","#0473AD","#9107A8"];
        this.classCode = "";
        this.username = "";
        this.activeTheme = "#A04040";
        this.countdownLength = 5;
        this.alarm = false;
        this.useTextSpeech = false;
        this.notifications = true;
    }

    update(){
        let settings = "<h1>Settings</h1>";
        settings += "<table id='settingsTable'>";
        settings += "<tr><td class='settingsUser'><b><p>Class Code&rarr;</p><p>Name&rarr;</p></b></td><td class='settingsUserValue'>" +
            "<p><input type='text' id='classCode' name='classCode' placeholder='Enter Code' value='" +
            this.classCode + "'></p><p><input type='text' id='username' name='username' placeholder='Enter Name' value='" +
            this.username + "'></p></td></tr>";
        settings += "<tr><td class='settingsName'>Theme&rarr;</td><td class='settingsValue'>" +
            "<input type='color' id='inputTheme' value='" + this.activeTheme + "' list='presetColors'><datalist id='presetColors'>";
            for(let x=0; x<this.themeColors.length; x++)
                settings += "<option value='" + this.themeColors[x] + "'/>";
            settings += "</datalist>" + "</td></tr>";
        settings += "<tr><td class='settingsName'>Countdown&rarr;</td><td class='settingsValue'>" +
            "<input type='number' id='inputCountdown' value='" + this.countdownLength + "' min='0' max='59'> Minutes</td></tr>";
        settings += "<tr><td class='settingsName'>Alarm&rarr;</td><td class='settingsValue'>" +
            "<input type='checkbox' id='alarmInput'></td></tr>";
        settings += "<tr><td class='settingsName'>Text-Speech&rarr;</td><td class='settingsValue'>" +
            "<input type='checkbox' id='textSpeechInput'></td></tr>";
        settings += "<tr><td class='settingsName'>Notifications&rarr;</td><td class='settingsValue'>" +
            "<input type='checkbox' id='notificationInput'></td></tr>";
        settings += "</table>";

        super.update(settings);

        document.getElementById("alarmInput").checked = this.alarm;
        document.getElementById("textSpeechInput").checked = this.useTextSpeech;
        document.getElementById("notificationInput").checked = this.notifications;
    }

    getSettings(){
        return {classCode: this.classCode,
                username: this.username,
                activeTheme: this.activeTheme,
                countdownLength: this.countdownLength,
                alarm: this.alarm,
                useTextSpeech: this.useTextSpeech,
                notifications: this.notifications};
    }
    setSettings(settingsData){

        this.classCode = settingsData.classCode;
        this.username = settingsData.username;
        this.activeTheme = settingsData.activeTheme;
        this.countdownLength = settingsData.countdownLength;
        this.alarm = settingsData.alarm;
        this.useTextSpeech = settingsData.useTextSpeech;
        this.notifications = settingsData.notifications;
    }

}
