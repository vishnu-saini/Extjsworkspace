Ext.define('BookLib.view.CategoryGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.categorygrid',

    title: 'Categories',
    store: 'CategoryStore',
    initComponent: function() {
        this.columns = [
            {header: 'id',  dataIndex: 'id',  flex: 1},
            {header: 'name', dataIndex: 'name', flex: 1}
        ];

        this.callParent(arguments);
    },
    
    init : function() {
		console
				.log('in category list view');

	}
});