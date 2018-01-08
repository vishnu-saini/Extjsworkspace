Ext.define('BookLib.view.publisher.Form', {
	extend : 'Ext.window.Window',
	alias : 'widget.publisherform',

	title : 'Publisher Form',
	layout : 'fit',
	autoShow : true,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			} ]
		} ];

		this.buttons = [ {
			text : 'Edit',
			action : 'edit'
		}, {
			text : 'Add',
			action : 'add'
		}, {
			text : 'Cancel',
			scope : this,
			handler : this.close
		} ];

		this.callParent(arguments);
	}
});