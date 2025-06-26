import ContentManager from '/JS/Managers/ContentManager.js';

const contentManager = new ContentManager(this);

window.onload = function(){

};

window.onresize = function(event) {
    contentManager.update();
};
