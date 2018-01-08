Ext.define('BookLib.view.Viewport', {
	extend : 'Ext.container.Viewport',
	layout : 'fit',
	items : [ {
		xtype : 'tabpanel',
		activeTab : 0,
		plain : true,
		defaults : {
			autoScroll : true,
		},
		items : [ {
			xtype : 'bookgrid'
		}, {
			xtype : 'categorygrid'
		},{
			xtype : 'publishergrid'
		} ]
	} ]
});