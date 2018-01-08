Ext.define('HelloExt.package.OwnWindow', {
	
    isWindow: true,

    config: {
        title: 'Title Here',

        bottomBar: {
            enabled: true,
            height: 50,
            resizable: false
        }
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    applyTitle: function(title) {
        if (!Ext.isString(title) || title.length === 0) {
            alert('Error: Title must be a valid non-empty string');
        }
        else {
            return title;
        }
    },

    applyBottomBar: function(bottomBar) {
       alert("hii " +bottomBar.height);
       return bottomBar;
    }
});