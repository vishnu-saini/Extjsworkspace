Ext.define('BookLib.view.PublisherGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.publishergrid',
	rowEditor : Ext.create('Ext.grid.plugin.RowEditing', {
		clicksToEdit : 2,
		pluginId : 'rowEditing'
	}),
	selType : 'rowmodel',
	
	
	title : 'Publishers',
	store : 'PublisherStore',
	initComponent : function() {
		var publisherEditor = this;
		this.addEvents([ 'publisherEdit', 'publisherDelete' ]);
		
		
		this.columns = [ {
			header : 'id',
			dataIndex : 'id',
			flex : 1,
			editor : {
				xtype : 'textfield',
				allowBlank : true
			}
		}, {
			header : 'name',
			dataIndex : 'name',
			flex : 1,
			editor : {
				xtype : 'textfield',
				allowBlank : true
			},
		}, {
			xtype : 'actioncolumn',
			width : 50,
			items : [ {
				icon : 'resources/images/edit.png', // Use a URL in the icon
				// config
				tooltip : 'Edit',
				handler : function(grid, rowIndex, colIndex) {
					publisherEditor.fireEvent('publisherEdit', {
						rowIndex : rowIndex,
						colIndex : colIndex
					});
				}
			}, {
				icon : 'resources/images/delete.png',
				tooltip : 'Delete',
				handler : function(grid, rowIndex, colIndex) {
					publisherEditor.fireEvent('publisherDelete', {
						rowIndex : rowIndex,
						colIndex : colIndex
					});
				}
			} ]
		}];
		this.plugins = [ this.rowEditor ];
		this.dockedItems = [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ '->', {
				text : 'Add Publisher'
			} ]
		} ];

		this.callParent(arguments);
	},

	init : function() {
		console.log('in publisher list view');

	}
});