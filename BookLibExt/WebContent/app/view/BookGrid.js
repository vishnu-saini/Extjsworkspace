Ext.define('BookLib.view.BookGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.bookgrid',

	title : 'Books',
	store : 'BookStore',

	initComponent : function() {
		this.columns = [ {
			header : 'ISBN',
			dataIndex : 'isbn',
			flex : 1
		}, {
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Assigned Copies',
			dataIndex : 'assignedCopies',

			flex : 1
		}, {
			header : 'Unassigned Copies',
			dataIndex : 'unassignedCopies',

			flex : 1
		}, {
			header : 'Category',
			dataIndex : 'category',
			editor : {
				xtype : 'combobox',
				store : 'CategoryStore',
				displayField : 'name',
				valueField : 'id',
				editable : false,
				forceSelection : true,
				triggerAction : 'all',
				allowBlank : false
			},
			flex : 1
		}, {
			header : 'Publisher Name',
			dataIndex : 'publisherName',
			editor : {
				xtype : 'combobox',
				store : 'PublisherStore',
				displayField : 'name',
				valueField : 'id',
				editable : false,
				forceSelection : true,
				triggerAction : 'all',
				allowBlank : false
			},
			flex : 1
		} ];
		this.dockedItems = [ {
			xtype : 'toolbar',
			dock : 'bottom',
			items : [ '->', {
				text : 'Add Book'
			} ]
		} ];
		this.callParent(arguments);
	}
});
