Ext.define('BookLib.view.book.Form', {
	extend : 'Ext.window.Window',
	alias : 'widget.bookform',

	title : 'Add Book Form',
	layout : 'fit',
	autoShow : true,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			}, {
				xtype : 'textfield',
				name : 'edision',
				fieldLabel : 'Edision'
			}, {
				xtype : 'textfield',
				name : 'numberOfBookAvailable',
				fieldLabel : 'Books Available'
			}, {
				xtype : 'combo',
				name : 'categoryId',
				fieldLabel : 'Category',
				store : 'CategoryStore',
				valueField : 'id',
				displayField : 'name'
			}, {
				xtype : 'textfield',
				name : 'author',
				fieldLabel : 'Author'
			}, {
				xtype : 'combo',
				name : 'publisherId',
				fieldLabel : 'Publisher',
				store : 'PublisherStore',
				valueField : 'id',
				displayField : 'name'
			} ]
		} ];

		this.buttons = [ {
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